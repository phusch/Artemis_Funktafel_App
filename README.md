# Artemis Funktafel V1.4.6 – Offline-PWA

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

V1.4.6 verwendet einen robusteren Navigation-Fallback für iOS/PWA und GitHub Pages.


## V1.4.6 – Knoten & Festmachen
Additiv ergänzt: 6 Bordknoten sowie Festmachen längsseits, rückwärts und Springs. Alle Bilder liegen lokal im Projekt und werden vom Service Worker offline gecacht.

### Bildquellen
- Bowline tying.png – Buz11, CC BY-SA 4.0, Wikimedia Commons
- Knot clove.jpg – Jazzmanian, Public Domain, Wikimedia Commons
- Two half hitches 1.jpg – Smack, Public Domain, Wikimedia Commons
- Knot figure eight.jpg – Jazzmanian, Public Domain, Wikimedia Commons
- Fender protecting the side of a sailing vessel.jpg – Frank van Mierlo, CC BY 2.5, Wikimedia Commons
- Chrome steel boat cleat with tied mooring rope – Marek Ślusarczyk, CC BY 3.0, Wikimedia Commons
