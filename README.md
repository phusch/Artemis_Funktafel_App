# Artemis Funktafel V1.3 – Offline-PWA

Sehr einfache zweisprachige Funktafel für iPhone und iPad.

## Reiter
- Start – UBI-Kurzregeln und Grundformulierungen
- Schleuse
- Brücke
- Hafenmeister
- Wörter – wichtige nautische Begriffe Deutsch / Englisch

## Offline-Nutzung
Die App verwendet einen Service Worker und speichert nach dem ersten erfolgreichen Laden alle für die App benötigten Dateien lokal im Browser-Cache.

Vorgehen auf iPhone/iPad:
1. GitHub-Pages-Link einmal mit Internetverbindung in Safari öffnen.
2. Die Seite vollständig laden lassen.
3. Teilen → „Zum Home-Bildschirm“.
4. Danach kann die installierte Funktafel auch ohne Internetverbindung geöffnet werden.

Der zuletzt verwendete Reiter wird zusätzlich lokal gespeichert.

## GitHub Pages
Alle Dateien dieses Ordners in das für GitHub Pages verwendete Repository hochladen. `index.html` muss im veröffentlichten Ordner liegen. Der Service Worker funktioniert über HTTPS; GitHub Pages erfüllt diese Voraussetzung.


## Offline-Nutzung auf iPhone/iPad
1. Ordnerinhalt auf GitHub Pages hochladen.
2. Die GitHub-Pages-Adresse in Safari mit Internetverbindung öffnen.
3. Seite einmal vollständig laden, anschließend über **Teilen > Zum Home-Bildschirm** installieren.
4. Die installierte App noch einmal bei bestehender Internetverbindung öffnen und wieder schließen.
5. Danach funktioniert die App über das Home-Screen-Symbol auch ohne Internet.

V1.3 verwendet einen robusteren Navigation-Fallback für iOS/PWA und GitHub Pages.
