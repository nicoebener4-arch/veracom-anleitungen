const page = `<!doctype html>
<html lang="de-CH">
<head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Weblösung Anleitungen | veracom</title>
<style>
:root{font-family:Roboto,"Segoe UI",system-ui,sans-serif;color:#212121;background:#f2f4f5;--navy:#194650;--blue:#176b84;--line:#dadfe0;--muted:#4c5c5f}
*{box-sizing:border-box}body{margin:0}button,input,textarea,select{font:inherit}button,a,input,select,textarea{outline-offset:4px}button{cursor:pointer}button:disabled{opacity:.6;cursor:wait}button,a{touch-action:manipulation}
.wrap{width:min(1160px,calc(100% - 64px));margin:auto}header{background:#176b84;border-bottom:1px solid var(--line)}header .wrap{display:flex;align-items:center;justify-content:space-between;min-height:78px;gap:16px}.brand{width:158px;height:auto;display:block}.site-label{color:#fff;font-size:.94rem}
.hero{background:linear-gradient(115deg,#153e4a,#176b84);color:white;padding:54px 0 60px;border-bottom:4px solid #00bfa5}.hero h1{margin:0;font-size:clamp(2.25rem,6vw,3.65rem);letter-spacing:-.055em;line-height:1.05}.hero p{margin:16px 0 0;color:#e0f2f4;font-size:1.12rem}.hero .wrap{display:flex;align-items:center;justify-content:space-between;gap:24px}
.primary,.secondary{padding:11px 17px;border-radius:8px;border:1px solid transparent;font-weight:650}.primary{background:var(--blue);color:white}.primary:hover{background:#12566b}.hero .primary{background:#fff;color:var(--navy);white-space:nowrap}.hero .primary:hover{background:#e7effb}.secondary{background:#fff;color:var(--navy);border-color:var(--line)}.secondary:hover{background:#edf3fa}
main.wrap{padding:32px 0 54px;min-height:54vh}.tools{display:grid;grid-template-columns:2fr 1fr 1fr;gap:12px;padding:17px;background:#fff;border:1px solid var(--line);border-radius:12px}
input,select,textarea{width:100%;border:1px solid #b9c7d8;border-radius:7px;background:#fff;color:#212121;padding:11px 12px;min-width:0}textarea{min-height:220px;resize:vertical}input::placeholder,textarea::placeholder{color:#64768a}
label{display:grid;gap:6px;font-weight:650;font-size:.9rem}label input,label select,label textarea{font-weight:400;font-size:1rem}.small{color:var(--muted);font-weight:400}.results{display:flex;align-items:baseline;justify-content:space-between;gap:12px;margin:28px 0 13px}h2{margin:0;font-size:1.45rem;letter-spacing:-.025em}
#count{color:var(--muted);font-size:.9rem}.grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px}.card,.empty{background:#fff;border:1px solid var(--line);border-radius:12px;padding:20px}.card{display:flex;align-items:flex-start;flex-direction:column;gap:12px;min-height:190px}.card h3{font-size:1.16rem;margin:0;overflow-wrap:anywhere}.card p{margin:0 0 5px;color:var(--muted);overflow-wrap:anywhere}.badge{display:inline-block;color:#155b70;background:#e4f4f5;padding:5px 10px;border-radius:5px;font-weight:650;font-size:.87rem;overflow-wrap:anywhere;max-width:100%}.card .secondary{margin-top:auto}.empty{grid-column:1/-1;text-align:center;padding:45px 24px}.empty p{color:var(--muted);margin:10px 0 20px}
footer{background:#141a19;border-top:1px solid var(--line);padding:22px 0;color:#d0dad8;font-size:.9rem}footer .wrap{display:flex;justify-content:space-between;gap:12px}a{color:#155b70;text-underline-offset:3px}
dialog{width:min(690px,calc(100% - 32px));max-height:calc(100% - 32px);padding:25px;border:1px solid var(--line);border-radius:14px;color:inherit}dialog::backdrop{background:#0a1a30a6}.dialog-head,.actions{display:flex;align-items:center;justify-content:space-between;gap:12px}.dialog-head{margin-bottom:18px}.close{background:#eef3f9;color:var(--navy);border:0;border-radius:7px;font-size:1.5rem;width:42px;height:42px;flex:none}.fields{display:grid;gap:15px}.actions{justify-content:flex-end;margin-top:20px;flex-wrap:wrap}.danger{color:#9c2433;margin-right:auto}.body-text{white-space:pre-wrap;overflow-wrap:anywhere;line-height:1.65}.error{color:#9c2433}.error:empty{display:none}#articleLink{overflow-wrap:anywhere}
@media(max-width:850px){.grid{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(max-width:630px){.wrap{width:calc(100% - 32px)}.hero{padding:36px 0}.hero .wrap{align-items:flex-start;flex-direction:column}.tools{grid-template-columns:repeat(2,minmax(0,1fr))}.tools label:first-child{grid-column:1/-1}.grid{grid-template-columns:1fr}.site-label{text-align:right}.dialog-head h2{overflow-wrap:anywhere}}
footer a{color:#d0dad8}
.chat-toggle{position:fixed;inset:auto 24px 24px auto;z-index:2;box-shadow:0 4px 18px #141a1930;border-radius:24px}
body{padding-bottom:54px}footer{margin-bottom:-54px;padding-bottom:76px}
.chat{width:min(420px,calc(100% - 32px));padding:0}
.chat-head{background:#176b84;color:white;padding:14px 18px;display:flex;align-items:center;justify-content:space-between;gap:8px}
.chat-head h2{font-size:1.2rem}.chat-log{padding:16px;max-height:min(45vh,380px);min-height:130px;overflow:auto;display:flex;flex-direction:column;gap:12px}
.msg{max-width:95%;align-self:flex-start;background:#edf4f4;border-radius:9px;padding:10px 12px;overflow-wrap:anywhere}.msg p{margin:0}.msg.user{align-self:flex-end;background:#176b84;color:#fff}.msg ul{margin:8px 0 0;padding:0;list-style:none;display:grid;gap:6px}.msg .secondary{text-align:left;width:100%;padding:8px 10px;overflow-wrap:anywhere}
.chat form{display:flex;gap:8px;padding:12px 16px 16px;border-top:1px solid var(--line)}
@media(min-width:631px){.chat{margin:auto 24px 24px auto}}

</style>
</head>
<body>
<header><div class="wrap"><img class="brand" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkViZW5lXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzODUuNSA5NS4xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzODUuNSA5NS4xOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6IzFEODA5RTt9Cgkuc3Qxe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CjxnPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTU1LjIsMzEuNmgtNC42VjI3bDQuMS00LjF2LTMuMmMxLjQtMC40LDIuNS0xLjgsMi41LTMuM2MwLTEuOS0xLjYtMy41LTMuNS0zLjVjLTEuOSwwLTMuNSwxLjYtMy41LDMuNQoJCWMwLDEuNiwxLjEsMi45LDIuNSwzLjRWMjJsLTQuMSw0LjF2NS41aC00LjhWOC45YzEuOS0wLjUsMy4zLTIuMywzLjMtNC40QzQ3LjEsMiw0NSwwLDQyLjUsMEM0MCwwLDM4LDIsMzgsNC41CgkJYzAsMi4xLDEuNCwzLjgsMy4zLDQuNHYyMi43aC00Ljh2LTUuNUwzMi40LDIybDAtMi4zYzEuNC0wLjQsMi41LTEuOCwyLjUtMy4zYzAtMS45LTEuNi0zLjUtMy41LTMuNWMtMS45LDAtMy41LDEuNi0zLjUsMy41CgkJYzAsMS42LDEuMSwyLjksMi41LDMuNHYzLjJsNC4xLDQuMXY0LjZoLTQuNmMtMS44LDAtMy4yLDEuNS0zLjIsMy4ydjQuNmgtMS45bC00LjEtNC4xaC0zLjJjLTAuNC0xLjQtMS44LTIuNS0zLjMtMi41CgkJYy0xLjksMC0zLjUsMS42LTMuNSwzLjVjMCwxLjksMS42LDMuNSwzLjUsMy41YzEuNiwwLDIuOS0xLjEsMy40LTIuNWgyLjNsNC4xLDQuMWgyLjd2NC44SDguOUM4LjQsNDQuNCw2LjYsNDMsNC41LDQzCgkJQzIsNDMsMCw0NSwwLDQ3LjVjMCwyLjUsMiw0LjUsNC41LDQuNWMyLjEsMCwzLjgtMS40LDQuNC0zLjNoMTcuN3Y0LjhoLTIuN2wtNC4xLDQuMWgtMi4zYy0wLjQtMS40LTEuOC0yLjUtMy4zLTIuNQoJCWMtMS45LDAtMy41LDEuNi0zLjUsMy41YzAsMS45LDEuNiwzLjUsMy41LDMuNWMxLjYsMCwyLjktMS4xLDMuNC0yLjVoMy4ybDQuMS00LjFoMS45djQuNmMwLDEuOCwxLjUsMy4yLDMuMiwzLjJoNC42djQuNmwtNC4xLDQuMQoJCXYzLjJjLTEuNSwwLjQtMi41LDEuOC0yLjUsMy40YzAsMS45LDEuNiwzLjUsMy41LDMuNWMxLjksMCwzLjUtMS42LDMuNS0zLjVjMC0xLjYtMS0yLjktMi41LTMuM2wwLTIuM2w0LjEtNC4xdi01LjVoNC44djIyLjcKCQljLTEuOSwwLjUtMy4zLDIuMy0zLjMsNC40YzAsMi41LDIsNC41LDQuNSw0LjVjMi41LDAsNC41LTIsNC41LTQuNWMwLTIuMS0xLjQtMy44LTMuMy00LjRWNjMuNGg0Ljh2NS41bDQuMSw0LjF2Mi4zCgkJYy0xLjUsMC40LTIuNSwxLjgtMi41LDMuNGMwLDEuOSwxLjYsMy41LDMuNSwzLjVjMS45LDAsMy41LTEuNiwzLjUtMy41YzAtMS42LTEtMi45LTIuNS0zLjN2LTMuMmwtNC4xLTQuMXYtNC42aDQuNgoJCWMxLjgsMCwzLjItMS41LDMuMi0zLjJ2LTQuNmgxLjhsNC4xLDQuMWgzLjJjMC40LDEuNSwxLjgsMi41LDMuNCwyLjVjMS45LDAsMy41LTEuNiwzLjUtMy41YzAtMS45LTEuNi0zLjUtMy41LTMuNQoJCWMtMS42LDAtMi45LDEtMy4zLDIuNWgtMi4zbC00LjEtNC4xaC0yLjd2LTQuOGgxNy43YzAuNSwxLjksMi4zLDMuMyw0LjQsMy4zYzIuNSwwLDQuNS0yLDQuNS00LjVjMC0yLjUtMi00LjUtNC41LTQuNQoJCWMtMi4xLDAtMy44LDEuNC00LjQsMy4zSDU4LjR2LTQuOGgyLjdsNC4xLTQuMWgyLjNjMC40LDEuNSwxLjgsMi41LDMuNCwyLjVjMS45LDAsMy41LTEuNiwzLjUtMy41YzAtMS45LTEuNi0zLjUtMy41LTMuNQoJCWMtMS42LDAtMi45LDEtMy4zLDIuNWgtMy4ybC00LjEsNC4xaC0xLjh2LTQuNkM1OC40LDMzLjEsNTcsMzEuNiw1NS4yLDMxLjZMNTUuMiwzMS42eiBNNTIsNzguN2MwLDEsMC44LDEuNywxLjcsMS43CgkJYzEsMCwxLjctMC44LDEuNy0xLjdTNTQuNyw3Nyw1My43LDc3QzUyLjgsNzcsNTIsNzcuOCw1Miw3OC43TDUyLDc4Ljd6IE0yOS42LDc4LjdjMCwxLDAuOCwxLjcsMS43LDEuN2MxLDAsMS43LTAuOCwxLjctMS43CgkJUzMyLjMsNzcsMzEuMyw3N0MzMC40LDc3LDI5LjYsNzcuOCwyOS42LDc4LjdMMjkuNiw3OC43eiBNNC41LDQ5LjhjLTEuMiwwLTIuMi0xLTIuMi0yLjJjMC0xLjIsMS0yLjIsMi4yLTIuMmMxLjIsMCwyLjIsMSwyLjIsMi4yCgkJQzYuOCw0OC44LDUuOCw0OS44LDQuNSw0OS44TDQuNSw0OS44eiBNODAuNSw0OS44YzEuMiwwLDIuMi0xLDIuMi0yLjJjMC0xLjItMS0yLjItMi4yLTIuMmMtMS4yLDAtMi4yLDEtMi4yLDIuMgoJCUM3OC4zLDQ4LjgsNzkuMyw0OS44LDgwLjUsNDkuOEw4MC41LDQ5Ljh6IE00MC4zLDkwLjVjMCwxLjIsMSwyLjIsMi4yLDIuMmMxLjIsMCwyLjItMSwyLjItMi4yYzAtMS4yLTEtMi4yLTIuMi0yLjIKCQlDNDEuMyw4OC4zLDQwLjMsODkuMyw0MC4zLDkwLjVMNDAuMyw5MC41eiBNNTIsMTYuM2MwLTEsMC44LTEuNywxLjctMS43YzEsMCwxLjcsMC44LDEuNywxLjdjMCwxLTAuOCwxLjctMS43LDEuNwoJCUM1Mi44LDE4LjEsNTIsMTcuMyw1MiwxNi4zTDUyLDE2LjN6IE0yOS42LDE2LjNjMC0xLDAuOC0xLjcsMS43LTEuN2MxLDAsMS43LDAuOCwxLjcsMS43YzAsMS0wLjgsMS43LTEuNywxLjcKCQlDMzAuNCwxOC4xLDI5LjYsMTcuMywyOS42LDE2LjNMMjkuNiwxNi4zeiBNNDAuMyw0LjVjMC0xLjIsMS0yLjIsMi4yLTIuMmMxLjIsMCwyLjIsMSwyLjIsMi4yYzAsMS4yLTEsMi4yLTIuMiwyLjIKCQlDNDEuMyw2LjgsNDAuMyw1LjgsNDAuMyw0LjVMNDAuMyw0LjV6IE0xNC4xLDYwLjVjLTEsMC0xLjctMC44LTEuNy0xLjdjMC0xLDAuOC0xLjcsMS43LTEuN2MxLDAsMS43LDAuOCwxLjcsMS43CgkJQzE1LjgsNTkuNywxNSw2MC41LDE0LjEsNjAuNUwxNC4xLDYwLjV6IE0xNC4xLDM4LjFjLTEsMC0xLjctMC44LTEuNy0xLjdjMC0xLDAuOC0xLjcsMS43LTEuN2MxLDAsMS43LDAuOCwxLjcsMS43CgkJQzE1LjgsMzcuMywxNSwzOC4xLDE0LjEsMzguMUwxNC4xLDM4LjF6IE03MC45LDYwLjVjMSwwLDEuNy0wLjgsMS43LTEuN2MwLTEtMC44LTEuNy0xLjctMS43Yy0xLDAtMS43LDAuOC0xLjcsMS43CgkJQzY5LjIsNTkuNyw3MCw2MC41LDcwLjksNjAuNUw3MC45LDYwLjV6IE03MC45LDM4LjFjMSwwLDEuNy0wLjgsMS43LTEuN2MwLTEtMC44LTEuNy0xLjctMS43Yy0xLDAtMS43LDAuOC0xLjcsMS43CgkJQzY5LjIsMzcuMyw3MCwzOC4xLDcwLjksMzguMUw3MC45LDM4LjF6IE01MC42LDM3LjNIMzQuNWMtMS4yLDAtMi4yLDEtMi4yLDIuMnYxNi4xYzAsMS4yLDEsMi4yLDIuMiwyLjJoMTYuMWMxLjIsMCwyLjItMSwyLjItMi4yCgkJVjM5LjVDNTIuOCwzOC4zLDUxLjgsMzcuMyw1MC42LDM3LjNMNTAuNiwzNy4zeiIvPgo8L2c+CjxnPgoJPHBhdGggY2xhc3M9InN0MSIgZD0iTTEyNi4zLDM2LjJ2LTguMWgtMy41djhjMCwxMi4xLTMuNCwyMC45LTExLjksMjguMWMtOC40LTcuMy0xMS44LTE2LjEtMTEuOC0yOC4xdi04aC0zLjZ2OC4xCgkJYzAsMTMsNCwyMi41LDEzLjgsMzAuOWgzLjFDMTIyLjMsNTguNiwxMjYuMyw0OS4xLDEyNi4zLDM2LjJMMTI2LjMsMzYuMnoiLz4KCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xNjkuMyw2Mi4zdi03aC0zLjV2NS4yYy0zLjMsMi43LTcuNiwzLjQtMTEuNCwzLjRjLTMuOCwwLTguMi0wLjgtMTEuNS0zLjRWNDguNWgyNi4zVjMyLjQKCQljLTMuOS0zLjQtOS40LTUuMS0xNC44LTUuMWMtNS42LDAtMTEsMS43LTE0LjksNS4xdjI5LjljNC4xLDMuNSw5LjYsNSwxNC45LDVDMTU5LjgsNjcuMywxNjUuMiw2NS44LDE2OS4zLDYyLjNMMTY5LjMsNjIuM3oKCQkgTTE2NS44LDQ1LjRoLTIyLjlWMzQuMmMzLjMtMi43LDcuNi0zLjYsMTEuNS0zLjZjNCwwLDguMiwxLDExLjQsMy42VjQ1LjRMMTY1LjgsNDUuNHoiLz4KCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0yMDAuMywzMXYtMy4zaC01Yy00LjksMC05LjUsMi0xMi42LDUuNXYzMy4zaDMuNVYzNWMxLjktMi40LDUuNC00LDkuMS00SDIwMC4zTDIwMC4zLDMxeiIvPgoJPHBhdGggY2xhc3M9InN0MSIgZD0iTTIzOS4xLDYyLjVWMzJjLTQuMS0zLjMtOS41LTQuNy0xNC44LTQuN2MtNS40LDAtMTAuNywxLjQtMTQuNyw0LjZ2N2gzLjR2LTUuMmMzLjQtMi41LDcuNS0zLjIsMTEuMy0zLjIKCQljMy44LDAsOC4yLDAuOCwxMS40LDMuNHYxMi45Yy0zLjQtMS42LTcuMi0yLjYtMTEuOC0yLjZjLTUuNCwwLTEwLjcsMS40LTE0LjUsNC4ydjE0LjFjNC4xLDMuNCw5LjEsNC44LDE0LjgsNC44CgkJQzIyOS45LDY3LjMsMjM1LjEsNjUuOCwyMzkuMSw2Mi41TDIzOS4xLDYyLjV6IE0yMzUuNiw2MC43Yy0zLjEsMi42LTcuNCwzLjQtMTEuNCwzLjRjLTQtMC4xLTguNC0wLjktMTEuNS0zLjRWNTAuMwoJCWMzLjQtMi40LDcuNy0zLDExLjUtM2M0LjYsMC4xLDguMywxLDExLjQsMi43VjYwLjdMMjM1LjYsNjAuN3oiLz4KCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0yODIuMSw2Mi4zdi03LjRoLTMuNXY1LjdjLTMuMywyLjctNy44LDMuNC0xMS41LDMuNGMtMy44LDAtOC4zLTAuOC0xMS41LTMuNFYzNGMzLjMtMi43LDcuOC0zLjQsMTEuNS0zLjQKCQljMy44LDAsOC4yLDAuOCwxMS41LDMuNHY1LjZoMy41di03LjRjLTQuMi0zLjQtOS44LTUtMTUtNWMtNS40LDAtMTEsMS41LTE1LDV2MzAuMWM0LjEsMy41LDkuOCw1LDE1LDUKCQlDMjcyLjQsNjcuMywyNzgsNjUuOCwyODIuMSw2Mi4zTDI4Mi4xLDYyLjN6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMzI2LDYxLjhWMzIuN2MtMy44LTMuNC05LjgtNS40LTE1LjgtNS40Yy02LjIsMC0xMi4yLDItMTUuOCw1LjR2MjkuMWMzLjgsMy40LDkuOCw1LjQsMTUuOCw1LjQKCQlDMzE2LjMsNjcuMywzMjIuMyw2NS4yLDMyNiw2MS44TDMyNiw2MS44eiBNMzIyLjUsNjAuMWMtMy4xLDIuOC04LjIsMy45LTEyLjMsMy45Yy00LjIsMC05LjMtMS4yLTEyLjMtMy45VjM0LjQKCQljMy4xLTIuNyw4LjItMy44LDEyLjMtMy44YzQuMiwwLDkuMiwxLjEsMTIuMywzLjhWNjAuMUwzMjIuNSw2MC4xeiIvPgoJPHBhdGggY2xhc3M9InN0MSIgZD0iTTM4NS41LDY2LjVWMzIuOGMtNi42LTMuOC0xNC01LjUtMjMtNS41Yy05LjEsMC0xNi42LDEuNy0yMyw1LjV2MzMuN2gzLjVWMzQuNmM0LjYtMi42LDkuOC0zLjksMTcuNy00LjF2MzYKCQloMy41di0zNmM3LjgsMC4yLDEzLjEsMS40LDE3LjcsNC4xdjMxLjlIMzg1LjVMMzg1LjUsNjYuNXoiLz4KPC9nPgo8L3N2Zz4K" width="158" height="39" alt="veracom"><div class="site-label">Weblösung · Anleitungen</div></div></header>
<section class="hero"><div class="wrap"><div><h1>Weblösung Anleitungen</h1><p>Anleitungen für deine Software zentral erfassen und finden.</p></div><button class="primary" id="create">＋ Neue Anleitung</button></div></section>
<main class="wrap">
<div class="tools">
<label>Suche<input id="search" type="search" placeholder="Titel oder Text suchen"></label>
<label>Programm<select id="filter"><option value="">Alle Programme</option></select></label>
<label>Sortierung<select id="sort"><option value="date">Neueste zuerst</option><option value="program">Nach Programm</option><option value="title">Titel A–Z</option></select></label>
</div>
<div class="results"><h2>Anleitungen</h2><span id="count" aria-live="polite"></span></div>
<p id="mainError" class="error" role="alert"></p><div id="posts" class="grid"><p>Anleitungen werden geladen …</p></div>
</main>
<button type="button" class="primary chat-toggle" id="openChat" aria-haspopup="dialog">Anleitungen-Chat</button>
<dialog class="chat" id="chat" aria-labelledby="chatTitle">
  <div class="chat-head"><h2 id="chatTitle">Anleitungen-Chat</h2><button class="close" data-close="chat" aria-label="Chat schliessen">×</button></div>
  <div class="chat-log" id="chatLog" role="log" aria-label="Chatverlauf">
    <div class="msg"><p>Welche Anleitung suchst du? Schreib ein Programm oder ein Stichwort, etwa «EXXAS Kontoplan».</p></div>
  </div>
  <form id="chatForm"><input id="chatInput" aria-label="Frage oder Stichwort" placeholder="Frage oder Stichwort" maxlength="300" required><button class="primary" type="submit">Senden</button></form>
</dialog>
<footer><div class="wrap"><span>veracom AG</span><a href="https://veracom.ch/" target="_blank" rel="noopener">veracom.ch</a></div></footer>
<dialog id="editor" aria-labelledby="editorTitle">
<div class="dialog-head"><h2 id="editorTitle">Neue Anleitung</h2><button type="button" class="close" data-close="editor" aria-label="Schliessen">×</button></div>
<form id="postForm">
<div class="fields">
<label>Titel<input name="title" required maxlength="160" placeholder="z. B. Auswertung erstellen"></label>
<label>Programm<input name="program" required maxlength="80" list="programs" placeholder="Programm auswählen oder eingeben"></label>
<datalist id="programs"></datalist>
<label>Anleitung<textarea name="body" required maxlength="50000" placeholder="Beschreibe die einzelnen Schritte …"></textarea></label>
<label>URL <span class="small">Optional</span><input name="url" type="url" maxlength="2000" placeholder="https://"></label>
</div>
<p id="editorError" class="error" role="alert"></p>
<div class="actions"><button type="button" class="secondary" data-close="editor">Abbrechen</button><button class="primary" type="submit">Speichern</button></div>
</form></dialog>
<dialog id="reader" aria-labelledby="articleTitle">
<div class="dialog-head"><h2 id="articleTitle"></h2><button class="close" data-close="reader" aria-label="Schliessen">×</button></div>
<div id="articleProgram" class="badge"></div><div id="articleBody" class="body-text"></div>
<p><a id="articleLink" target="_blank" rel="noopener">Verlinkte Seite öffnen</a></p>
<p id="readerError" class="error" role="alert"></p>
<div class="actions"><button class="secondary danger" id="deletePost">Löschen</button><button class="secondary" id="editPost">Bearbeiten</button></div>
</dialog>
<script>
const byId = id => document.getElementById(id);
const editor = byId('editor'), reader = byId('reader'), form = byId('postForm');
const basePrograms = ['EXXAS', 'ELO', 'Infoniqa', 'Suitefy', 'Topal'];
const compare = new Intl.Collator('de-CH', {sensitivity:'base', numeric:true}).compare;
let posts = [], activePost, editingId;
function node(tag, value, className) {
  const element = document.createElement(tag);
  element.textContent = value;
  if (className) element.className = className;
  return element;
}
function button(label, action) {
  const element = node('button', label, 'secondary');
  element.addEventListener('click', action);
  return element;
}
async function api(path = '', options = {}) {
  const response = await fetch('/api/posts' + path, options);
  const result = await response.json();
  if (!response.ok) throw new Error(result.error || 'Die Anfrage ist fehlgeschlagen.');
  return result;
}
function render() {
  const filter = byId('filter'), current = filter.value;
  const programs = [...new Map([...posts.map(post => post.program), ...basePrograms].reverse().map(program => [program.toLowerCase(), program])).values()].sort(compare);
  filter.replaceChildren(new Option('Alle Programme', ''), ...programs.map(program => new Option(program, program.toLowerCase())));
  filter.value = programs.some(program => program.toLowerCase() === current) ? current : '';
  byId('programs').replaceChildren(...programs.map(program => new Option(program)));
  const query = byId('search').value.trim().toLowerCase();
  const sort = byId('sort').value;
  const results = posts.filter(post =>
    (!filter.value || post.program.toLowerCase() === filter.value) &&
    [post.title, post.body, post.program].some(value => value.toLowerCase().includes(query))
  ).sort((a,b) => {
    if (sort === 'program') return compare(a.program,b.program) || compare(a.title,b.title);
    if (sort === 'title') return compare(a.title,b.title);
    return b.created.localeCompare(a.created);
  });
  byId('count').textContent = results.length + (results.length === 1 ? ' Anleitung' : ' Anleitungen');
  const grid = byId('posts');
  grid.replaceChildren();
  if (!results.length) {
    const empty = node('div', '', 'empty');
    empty.append(node('h3', posts.length ? 'Keine passenden Anleitungen' : 'Noch keine Anleitungen'),
      node('p', posts.length ? 'Passe die Suche oder den Programmfilter an.' : 'Erfasse deine erste Anleitung mit Titel, Text und optionalem Link.'));
    if (posts.length) empty.append(button('Filter zurücksetzen', () => {
      filter.value = byId('search').value = '';
      render();
    }));
    else empty.append(button('Neue Anleitung', () => openEditor()));
    grid.append(empty);
  }
  for (const post of results) {
    const card = node('article', '', 'card');
    const preview = post.body.replace(/\s+/g, ' ');
    card.append(node('span', post.program, 'badge'), node('h3', post.title),
      node('p', preview.length > 115 ? preview.slice(0,115) + '…' : preview),
      button('Anleitung öffnen', () => openReader(post)));
    grid.append(card);
  }
}
function openEditor(post) {
  editingId = post?.id;
  form.reset();
  byId('editorError').textContent = '';
  byId('editorTitle').textContent = post ? 'Anleitung bearbeiten' : 'Neue Anleitung';
  for (const field of ['title','program','body','url']) form.elements[field].value = post?.[field] || '';
  editor.showModal();
}
function openReader(post, returnToChat = false) {
  if (returnToChat) chat.close();
  reader.addEventListener('close', () => {
    if (returnToChat && !editor.open) chat.showModal();
  }, {once:true});
  activePost = post;
  byId('readerError').textContent = '';
  byId('articleTitle').textContent = post.title;
  byId('articleProgram').textContent = post.program;
  byId('articleBody').textContent = post.body;
  const link = byId('articleLink');
  link.hidden = !post.url;
  if (post.url) link.href = post.url;
  else link.removeAttribute('href');
  reader.showModal();
}
document.querySelectorAll('[data-close]').forEach(element => element.onclick = () => byId(element.dataset.close).close());
byId('create').onclick = () => openEditor();
byId('search').oninput = render;
byId('filter').onchange = byId('sort').onchange = render;
byId('editPost').onclick = () => { reader.close(); openEditor(activePost); };
form.onsubmit = async event => {
  event.preventDefault();
  const submit = form.querySelector('[type=submit]');
  submit.disabled = true;
  byId('editorError').textContent = '';
  try {
    const post = await api(editingId ? '/' + editingId : '', {
      method: editingId ? 'PUT' : 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(Object.fromEntries(new FormData(form)))
    });
    posts = [...posts.filter(item => item.id !== post.id), post];
    byId('mainError').textContent = '';
    byId('search').value = byId('filter').value = '';
    render();
    editor.close();
    openReader(post);
  } catch (error) { byId('editorError').textContent = error.message; }
  finally { submit.disabled = false; }
};
byId('deletePost').onclick = async event => {
  if (!confirm('Diese Anleitung endgültig löschen?')) return;
  const id = activePost.id, trigger = event.currentTarget;
  trigger.disabled = true;
  try {
    await api('/' + id, {method:'DELETE'});
    posts = posts.filter(post => post.id !== id);
    reader.close();
    render();
  } catch (error) { byId('readerError').textContent = error.message; }
  finally { trigger.disabled = false; }
};
const chat = byId('chat');
const chatInput = byId('chatInput');
const chatLog = byId('chatLog');
const stopWords = new Set('ich du wir sie es ist sind im in am an auf die der den das dem des ein eine einen einem und oder für von zu mit man kann können wie was wo finde soll bitte beim bei zum zur mir mich mein meine sich als nach brauche suche möchte geht wird werden'.split(' '));
function normalize(text) {
  return text.toLowerCase().normalize('NFD').replace(/\\p{M}/gu, '').replace(/ß/g, 'ss');
}
function chatMatches(question) {
  const words = normalize(question).match(/[a-z0-9]+/g) || [];
  const terms = [...new Set(words.filter(word => word.length > 1 && !stopWords.has(word)))];
  return posts.map(post => {
    const program = normalize(post.program);
    const title = normalize(post.title);
    const body = normalize(post.body);
    const score = terms.reduce((total, term) => total + (
      program === term ? 6 : title.includes(term) ? 4 : program.includes(term) ? 3 : body.includes(term) ? 1 : 0
    ), 0);
    return {post, score};
  }).filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score || compare(a.post.title, b.post.title))
    .slice(0, 3).map(item => item.post);
}
let loadState = 'loading';
byId('openChat').onclick = () => { chat.showModal(); chatInput.focus(); };
byId('chatForm').onsubmit = event => {
  event.preventDefault();
  const question = chatInput.value.trim();
  if (!question) return;
  chatInput.value = '';
  chatLog.append(node('div', question, 'msg user'));
  const answer = node('div', '', 'msg');
  const results = chatMatches(question);
  if (results.length) {
    answer.append(node('p', 'Diese Anleitungen könnten passen:'));
    const list = node('ul', '');
    for (const post of results) {
      const item = node('li', '');
      item.append(button(post.program + ' · ' + post.title, () => {
        const current = posts.find(candidate => candidate.id === post.id);
        if (current) openReader(current, true);
        else item.textContent = 'Diese Anleitung ist nicht mehr verfügbar.';
      }));
      list.append(item);
    }
    answer.append(list);
  } else {
    const message = loadState === 'loading' ? 'Die Anleitungen werden noch geladen. Versuch es gleich nochmals.'
      : loadState === 'error' && !posts.length ? 'Die Anleitungen konnten nicht geladen werden. Lade die Seite neu.'
      : !posts.length ? 'Es sind noch keine Anleitungen erfasst.'
      : 'Ich finde dazu keine Anleitung. Versuch es mit einem Programmnamen oder einem anderen Stichwort.';
    answer.append(node('p', message));
  }
  chatLog.append(answer);
  chatLog.scrollTop = chatLog.scrollHeight;
  chatInput.focus();
};
api().then(result => { loadState = 'ready'; posts = result; render(); }).catch(error => {
  loadState = 'error';
  byId('posts').replaceChildren();
  byId('mainError').textContent = error.message;
});
</script></body></html>`;

function json(data, status = 200) {
  return Response.json(data, {status, headers: {'Cache-Control':'no-store'}});
}

async function listPosts(bucket) {
  const posts = [];
  let cursor;
  do {
    const result = await bucket.list({prefix:'posts/', limit:50, cursor});
    const values = await Promise.all(result.objects.map(async ({key}) => (await bucket.get(key))?.json()));
    posts.push(...values.filter(Boolean));
    cursor = result.truncated ? result.cursor : undefined;
  } while (cursor);
  return posts;
}

async function savePost(request, bucket, id) {
  let input;
  try { input = await request.json(); }
  catch { return json({error:'Die Eingaben konnten nicht gelesen werden.'}, 400); }
  const post = Object.fromEntries(['title','program','body','url'].map(field =>
    [field, typeof input?.[field] === 'string' ? input[field].trim() : '']
  ));
  if (!post.title || !post.program || !post.body) {
    return json({error:'Titel, Programm und Anleitung sind erforderlich.'}, 400);
  }
  if (post.title.length > 160 || post.program.length > 80 || post.body.length > 50000 || post.url.length > 2000) {
    return json({error:'Mindestens ein Feld überschreitet die maximale Länge.'}, 400);
  }
  if (post.url) {
    try {
      const parsed = new URL(post.url);
      if (!['http:', 'https:'].includes(parsed.protocol)) throw new Error();
      post.url = parsed.href;
    } catch { return json({error:'Gib eine gültige URL mit https:// oder http:// ein.'}, 400); }
  }
  const existing = id ? await bucket.get('posts/' + id) : null;
  if (id && !existing) return json({error:'Diese Anleitung wurde nicht gefunden.'}, 404);
  const previous = existing ? await existing.json() : null;
  post.id = id || crypto.randomUUID();
  post.created = previous?.created || new Date().toISOString();
  const write = await bucket.put('posts/' + post.id, JSON.stringify(post), {
    onlyIf: existing ? {etagMatches:existing.etag} : {etagDoesNotMatch:'*'}
  });
  if (!write) return json({error:'Die Anleitung wurde gleichzeitig geändert. Lade die Übersicht neu.'}, 409);
  return json(post, id ? 200 : 201);
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === '/' && ['GET','HEAD'].includes(request.method)) {
      return new Response(request.method === 'HEAD' ? null : page, {
        headers:{'Content-Type':'text/html; charset=utf-8','X-Content-Type-Options':'nosniff'}
      });
    }
    const match = url.pathname.match(/^\/api\/posts(?:\/([a-f0-9-]{36}))?$/);
    if (!match) return json({error:'Seite nicht gefunden.'}, 404);
    const id = match[1];
    if (request.method !== 'GET' && request.headers.get('Origin') !== url.origin) {
      return json({error:'Diese Anfrage ist nicht erlaubt.'}, 403);
    }
    try {
      if (!id && request.method === 'GET') return json(await listPosts(env.BUCKET));
      if ((!id && request.method === 'POST') || (id && request.method === 'PUT')) {
        return await savePost(request, env.BUCKET, id);
      }
      if (id && request.method === 'DELETE') {
        await env.BUCKET.delete('posts/' + id);
        return json({deleted:true});
      }
      return json({error:'Diese Aktion ist nicht verfügbar.'}, 405);
    } catch (error) {
      console.error(error);
      return json({error:'Die Anleitungen konnten momentan nicht geladen oder gespeichert werden.'}, 503);
    }
  }
};
