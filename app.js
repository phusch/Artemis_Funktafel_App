const DATA = {
  start: [
    ["Allgemeiner Anruf", "[Funkstelle], hier Motoryacht Artemis.", "[Station], motor yacht Artemis."],
    ["Bitte wiederholen", "Bitte wiederholen.", "Say again, please."],
    ["Langsamer sprechen", "Bitte langsam wiederholen.", "Please repeat slowly."],
    ["Englisch", "Entschuldigung, bitte auf Englisch.", "Sorry, English please."],
    ["Verstanden", "Verstanden.", "Roger."],
    ["Warten", "Verstanden, wir warten.", "Roger, standing by."],
    ["Weiterfahren", "Verstanden, wir fahren weiter.", "Roger, proceeding."],
    ["Freigabe prüfen", "Dürfen wir jetzt weiterfahren?", "Are we clear to proceed now?"],
    ["Steuerbord", "Verstanden, Steuerbordseite.", "Roger, starboard side."],
    ["Backbord", "Verstanden, Backbordseite.", "Roger, port side."],
    ["Position erfragen", "Wo genau sollen wir warten?", "Where exactly should we wait?"],
    ["Richtung", "Wir fahren Richtung [Ort].", "We are heading towards [place]."]
  ],
  lock: [
    ["Erstanruf", "Schleuse [Name], hier Motoryacht Artemis. Wir kommen aus Richtung [Ort] und möchten schleusen.", "[Lock name], motor yacht Artemis. Approaching from [place], requesting lock passage."],
    ["Nächste Schleusung", "Wann ist die nächste Schleusung in unsere Richtung?", "When is the next lockage in our direction?"],
    ["Wartezeit", "Wie lange beträgt die Wartezeit?", "How long is the waiting time?"],
    ["Warteplatz", "Wo sollen wir bis zur Einfahrt warten?", "Where should we wait before entering the lock?"],
    ["Einfahrt", "Dürfen wir jetzt in die Schleuse einfahren?", "Are we clear to enter the lock now?"],
    ["Seite zum Festmachen", "Welche Seite sollen wir zum Festmachen benutzen?", "Which side should we use for mooring?"],
    ["Position", "Wo sollen wir uns in der Schleuse positionieren?", "Where should we position ourselves in the lock?"],
    ["Reihenfolge", "Sollen wir vor oder hinter dem anderen Sportboot einfahren?", "Should we enter before or after the other pleasure craft?"],
    ["Sportboot-Reihenfolge", "Gibt es eine besondere Reihenfolge für Sportboote?", "Is there a particular order for pleasure craft?"],
    ["Dauer", "Wie lange dauert die Schleusung ungefähr?", "Approximately how long will the lockage take?"],
    ["Betriebszeit", "Ist die Schleuse heute durchgehend in Betrieb?", "Is the lock operating continuously today?"],
    ["Letzte Schleusung", "Wann ist die letzte Schleusung heute?", "When is the last lockage today?"],
    ["Betriebspause", "Gibt es heute eine Betriebsunterbrechung?", "Is there any closure period today?"],
    ["Gegenverkehr", "Müssen wir auf Gegenverkehr warten?", "Do we have to wait for oncoming traffic?"],
    ["Leinen", "Müssen die Leinen während des Schleusens geführt werden?", "Do we need to tend the lines during the lockage?"],
    ["Ausfahrt", "Dürfen wir die Schleuse jetzt verlassen?", "Are we clear to leave the lock now?"]
  ],
  bridge: [
    ["Erstanruf", "Brücke [Name], hier Motoryacht Artemis. Wir kommen aus Richtung [Ort] und möchten passieren.", "[Bridge name], motor yacht Artemis. Approaching from [place], requesting passage."],
    ["Öffnung nötig?", "Unsere Höhe über Wasser beträgt 4,15 Meter. Benötigen wir eine Öffnung?", "Our air draught is four point one five metres. Do we need an opening?"],
    ["Nächste Öffnung", "Wann ist die nächste Brückenöffnung?", "When is the next bridge opening?"],
    ["Wartezeit", "Wie lange beträgt die aktuelle Wartezeit?", "How long is the current waiting time?"],
    ["Auf Anforderung?", "Öffnen Sie auf Anforderung oder zu festen Zeiten?", "Do you open on request or at scheduled times?"],
    ["Öffnungszeiten", "Zu welchen Zeiten öffnen Sie heute?", "What are your opening times today?"],
    ["Mittagspause", "Gibt es eine Mittagspause oder Betriebspause?", "Is there a lunch break or any closure period?"],
    ["Außer Betrieb", "Ist die Brücke derzeit außer Betrieb?", "Is the bridge currently out of service?"],
    ["Wiederbetrieb", "Wann wird die Brücke wieder bedient?", "When will the bridge be operated again?"],
    ["Warteplatz", "Wo sollen wir bis zur Öffnung warten?", "Where should we wait until the bridge opens?"],
    ["Warteseite", "Sollen wir an Steuerbord oder Backbord warten?", "Should we wait on the starboard or port side?"],
    ["Durchfahrt", "Dürfen wir jetzt passieren?", "Are we clear to proceed now?"],
    ["Begegnung", "Müssen wir vor der Durchfahrt Gegenverkehr abwarten?", "Do we need to wait for oncoming traffic before passing?"],
    ["Breite", "Ist die Durchfahrt für 3,85 Meter Breite frei?", "Is the passage clear for a beam of three point eight five metres?"],
    ["Bestätigung", "Haben wir richtig verstanden: Öffnung um [Uhrzeit]?", "Did we understand correctly: opening at [time]?"],
    ["Keine Antwort", "Brücke [Name], Motoryacht Artemis, zweiter Anruf.", "[Bridge name], motor yacht Artemis, second call."]
  ],
  harbour: [
    ["Erstanruf", "Hafenmeister [Ort], hier Motoryacht Artemis. Wir suchen einen Liegeplatz für eine Nacht.", "Harbour Master [place], motor yacht Artemis. We are looking for a berth for one night."],
    ["Bootsgröße", "Haben Sie einen Liegeplatz für 12,30 Meter Länge und 3,85 Meter Breite?", "Do you have a berth for a boat twelve point three metres long and three point eight five metres wide?"],
    ["Zwei Nächte", "Können wir für zwei Nächte bleiben?", "Can we stay for two nights?"],
    ["Liegeplatznummer", "Welche Liegeplatznummer haben wir?", "What is our berth number?"],
    ["Liegeplatz finden", "Wo befindet sich unser Liegeplatz?", "Where is our berth?"],
    ["Längsseits / Box", "Sollen wir längsseits oder in einer Box festmachen?", "Should we moor alongside or in a berth box?"],
    ["Anlegeseite", "Auf welcher Seite sollen wir anlegen?", "Which side should we berth on?"],
    ["Breite", "Ist der Liegeplatz für 3,85 Meter Breite geeignet?", "Is the berth suitable for a beam of three point eight five metres?"],
    ["Wassertiefe", "Wie tief ist es am Liegeplatz?", "What is the water depth at the berth?"],
    ["Meldesteg", "Können wir vorübergehend am Meldesteg festmachen?", "May we temporarily moor at the reception berth?"],
    ["Warten", "Wo sollen wir warten, falls noch kein Platz frei ist?", "Where should we wait if no berth is available yet?"],
    ["Landstrom", "Gibt es Landstrom am Liegeplatz?", "Is shore power available at the berth?"],
    ["Stromanschluss", "Welchen Anschluss benötigen wir für den Landstrom?", "What connection do we need for shore power?"],
    ["Strom inklusive", "Ist der Strom in der Liegegebühr enthalten?", "Is electricity included in the berth fee?"],
    ["Frischwasser", "Gibt es Frischwasser am Liegeplatz?", "Is fresh water available at the berth?"],
    ["Wassertank", "Wo können wir unseren Frischwassertank auffüllen?", "Where can we fill our fresh-water tank?"],
    ["Fäkalientank", "Gibt es eine Absaugstation für den Fäkalientank?", "Is there a pump-out station for the holding tank?"],
    ["Pump-out", "Wo befindet sich die Fäkalienabsaugung?", "Where is the holding-tank pump-out station?"],
    ["Sanitär", "Gibt es Duschen und Toiletten?", "Are showers and toilets available?"],
    ["Sanitär-Code", "Benötigen wir einen Code oder Schlüssel für die Sanitäranlagen?", "Do we need a code or key for the sanitary facilities?"],
    ["Duschen inklusive", "Sind die Duschen in der Liegegebühr enthalten?", "Are the showers included in the berth fee?"],
    ["Liegegebühr", "Wie hoch ist die Liegegebühr pro Nacht?", "How much is the berth fee per night?"],
    ["Bezahlung", "Wo können wir bezahlen?", "Where can we pay?"],
    ["Kartenzahlung", "Können wir mit Karte oder kontaktlos bezahlen?", "Can we pay by card or contactless?"],
    ["Zahlungszeit", "Müssen wir heute Abend oder erst bei Abfahrt bezahlen?", "Do we have to pay this evening or when we leave?"],
    ["Hafenbüro", "Wann öffnet und schließt das Hafenbüro?", "When does the harbour office open and close?"],
    ["Abfahrt", "Wir möchten morgen gegen [Uhrzeit] ablegen. Müssen wir uns vorher abmelden?", "We plan to leave tomorrow at about [time]. Do we need to report before departure?"],
    ["Ausfahrt", "Können wir den Hafen jederzeit verlassen?", "May we leave the harbour at any time?"],
    ["Hinweise", "Gibt es bei der Ausfahrt etwas zu beachten?", "Is there anything we should be aware of when leaving the harbour?"]
  ]
};

const WORDS = [
  ["Backbord","Port"],["Steuerbord","Starboard"],["Bug","Bow"],["Heck","Stern"],["voraus","Ahead"],["achteraus","Astern"],
  ["Brücke","Bridge"],["Schleuse","Lock"],["Hafenmeister","Harbour Master"],["Liegeplatz","Berth"],["Meldesteg","Reception berth"],
  ["Durchfahrt","Passage"],["Warteplatz","Waiting area"],["Wartezeit","Waiting time"],["Öffnungszeit","Opening time"],["Betriebspause","Closure period"],
  ["einfahren","Enter"],["ausfahren","Exit"],["weiterfahren","Proceed"],["warten","Stand by / Wait"],["festmachen","Moor"],["Leine","Line"],["Fender","Fender"],
  ["Länge","Length"],["Breite","Beam"],["Tiefgang","Draught"],["Höhe über Wasser","Air draught"],["Gegenverkehr","Oncoming traffic"],
  ["Landstrom","Shore power"],["Frischwasser","Fresh water"],["Fäkalientank","Holding tank"],["Absaugstation","Pump-out station"],
  ["Toilette","Toilet"],["Dusche","Shower"],["Sanitäranlagen","Sanitary facilities"],["Liegegebühr","Berth fee"],["Kartenzahlung","Card payment"]
];

function card([label,de,en], important=false){
  const a=document.createElement('article');
  a.className='phrase-card'+(important?' important':'');
  a.innerHTML=`<div class="label">${label}</div><p class="de">${de}</p><p class="en">${en}</p>`;
  return a;
}

function fillCards(id, items){
  const el=document.getElementById(id);
  items.forEach((item,i)=>el.appendChild(card(item,i===0)));
}
fillCards('start-cards',DATA.start);
fillCards('lock-cards',DATA.lock);
fillCards('bridge-cards',DATA.bridge);
fillCards('harbour-cards',DATA.harbour);

const wl=document.getElementById('word-list');
WORDS.forEach(([de,en])=>{
  const r=document.createElement('div');r.className='word-row';r.innerHTML=`<strong>${de}</strong><span>${en}</span>`;wl.appendChild(r);
});

document.querySelectorAll('.tab').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('.tab').forEach(b=>b.classList.remove('active'));
  document.querySelectorAll('.panel').forEach(p=>p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById(btn.dataset.tab).classList.add('active');
  window.scrollTo({top:0,behavior:'auto'});
}));
