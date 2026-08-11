# Artemis Funktafel V1.2 – Offline-PWA

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
