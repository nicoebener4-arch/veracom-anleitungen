# Veracom Anleitungen selbst hosten

Die Website enthält den Anleitungen-Chat, die Suche und die Verwaltung der Beiträge. Sie läuft auf Node.js ab Version 22. Die Anwendung hat keine zusätzlichen npm-Abhängigkeiten.

## Lokal starten

1. ZIP entpacken und ein Terminal im entpackten Ordner öffnen.
2. `npm start` ausführen.
3. `http://127.0.0.1:3000` im Browser öffnen.

## Auf einem eigenen Server betreiben

Starte die Anwendung als einzelnen Node.js-Prozess auf dem Server. Der Standard ist Port 3000 auf der lokalen Adresse 127.0.0.1. Setze einen HTTPS-Reverse-Proxy vor die Anwendung, der die Anfragen an diesen lokalen Port weiterleitet. Beispiel für eine Caddy-Konfiguration:

```caddyfile
anleitungen.example.ch {
    reverse_proxy 127.0.0.1:3000
}
```

Ersetze die Beispieldomain durch deine Domain. Hinterlege beim Start des Node.js-Dienstes diese Umgebungsvariablen:

| Variable | Wert |
| --- | --- |
| `PUBLIC_ORIGIN` | Die HTTPS-Adresse, z. B. `https://anleitungen.example.ch` |
| `ADMIN_USER` | Dein Benutzername, standardmässig `admin` |
| `ADMIN_PASSWORD` | Dein eigenes starkes Passwort. Für eine externe Adresse erforderlich. |
| `DATA_DIR` | Absoluter Pfad zu einem dauerhaft beschreibbaren Ordner. Standard ist `./data`. |
| `PORT` | Optional. Standard ist `3000`. Bei einer Änderung den Proxy anpassen. |

Starte den Prozess dauerhaft über die Dienstverwaltung deines Servers. Der Browser fragt beim Zugriff nach Benutzername und Passwort. Der ChatGPT-Login gehört zum bisherigen Hosting. Ein reiner HTML-Upload unterstützt die serverseitige Speicherung dieser Anwendung nicht.

## Beiträge und Sicherung

Beiträge werden als JSON-Dateien im Unterordner `posts` von `DATA_DIR` gespeichert. Sichere diesen Ordner regelmässig und behalte ihn bei Updates. Die ZIP enthält den Programmcode und startet mit einem leeren Datenordner. Beiträge aus der bisherigen Website sind separat gespeichert.
