import { createServer } from 'node:http';
import { createHash, randomUUID, timingSafeEqual } from 'node:crypto';
import { mkdirSync, readFileSync, readdirSync, renameSync, rmSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import worker from './worker/index.js';

const port = Number(process.env.PORT || 3000);
const host = process.env.HOST || '127.0.0.1';
const origin = new URL(process.env.PUBLIC_ORIGIN || 'http://127.0.0.1:' + port).origin;
const password = process.env.ADMIN_PASSWORD;
const local = host === '127.0.0.1' && origin === 'http://127.0.0.1:' + port;
if (!local && (!password || !origin.startsWith('https://'))) {
  throw new Error('Für externen Zugriff ADMIN_PASSWORD und eine HTTPS-PUBLIC_ORIGIN setzen.');
}
const username = process.env.ADMIN_USER || 'admin';
const hash = value => createHash('sha256').update(value).digest();
const credential = password ? hash('Basic ' + Buffer.from(username + ':' + password).toString('base64')) : null;
const directory = resolve(process.env.DATA_DIR || './data', 'posts');
mkdirSync(directory, {recursive:true});

function postPath(key) {
  if (!/^posts\/[a-f0-9-]{36}$/.test(key)) throw new Error('Ungültiger Beitragsschlüssel');
  return resolve(directory, key.slice(6) + '.json');
}
function readPost(key) {
  try {
    const contents = readFileSync(postPath(key));
    return {etag:hash(contents).toString('hex'), json: () => JSON.parse(contents)};
  } catch (error) {
    if (error.code === 'ENOENT') return null;
    throw error;
  }
}
const bucket = {
  list({limit, cursor}) {
    const keys = readdirSync(directory).filter(name => /^[a-f0-9-]{36}\.json$/.test(name)).sort();
    const start = Number(cursor || 0);
    const objects = keys.slice(start, start + limit).map(name => ({key:'posts/' + name.slice(0,-5)}));
    return {objects, truncated:start + limit < keys.length, cursor:String(start + limit)};
  },
  get: readPost,
  put(key, contents, {onlyIf}) {
    const existing = readPost(key);
    if (onlyIf.etagMatches && existing?.etag !== onlyIf.etagMatches) return null;
    if (onlyIf.etagDoesNotMatch === '*' && existing) return null;
    const path = postPath(key);
    const temporary = path + '.' + randomUUID() + '.tmp';
    try {
      writeFileSync(temporary, contents, {flag:'wx', mode:0o600});
      renameSync(temporary, path);
    } finally {
      rmSync(temporary, {force:true});
    }
    return {key};
  },
  delete(key) { rmSync(postPath(key), {force:true}); }
};

createServer(async (incoming, outgoing) => {
  try {
    if (credential && !timingSafeEqual(credential, hash(incoming.headers.authorization || ''))) {
      outgoing.writeHead(401, {'WWW-Authenticate':'Basic realm="Veracom Anleitungen", charset="UTF-8"', 'Cache-Control':'no-store'});
      outgoing.end('Bitte anmelden.');
      return;
    }
    const headers = new Headers(incoming.headers);
    const hasBody = incoming.method !== 'GET' && incoming.method !== 'HEAD';
    const chunks = [];
    let length = 0;
    if (hasBody) {
      for await (const chunk of incoming.iterator({destroyOnReturn:false})) {
        length += chunk.length;
        if (length > 512 * 1024) {
          outgoing.writeHead(413, {'Content-Type':'application/json', Connection:'close'});
          outgoing.end(JSON.stringify({error:'Die Anfrage ist zu gross.'}));
          return;
        }
        chunks.push(chunk);
      }
    }
    const target = new URL(incoming.url, origin);
    if (target.origin !== origin) {
      outgoing.writeHead(400).end();
      return;
    }
    const request = new Request(target, {method:incoming.method, headers, body:hasBody ? Buffer.concat(chunks) : undefined});
    const response = await worker.fetch(request, {BUCKET:bucket});
    outgoing.writeHead(response.status, {...Object.fromEntries(response.headers), 'Cache-Control':'no-store'});
    outgoing.end(Buffer.from(await response.arrayBuffer()));
  } catch (error) {
    console.error(error);
    if (!outgoing.headersSent) outgoing.writeHead(500);
    outgoing.end('Interner Serverfehler.');
  }
}).listen(port, host, () => console.log('Veracom Anleitungen · ' + origin));
