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
  ["Toilette","Toilet"],["Dusche","Shower"],["Sanitäranlagen","Sanitary facilities"],["Liegegebühr","Berth fee"],["Kartenzahlung","Card payment"],
  ["Seemeile","Nautical mile"],["Knoten","Knot"],["Kurs","Course"],["Peilung","Bearing"],["Fahrt über Grund","Speed over ground"],
  ["Fahrt durchs Wasser","Speed through water"],["Abdrift","Leeway / drift"],["Lee","Leeward"],["Luv","Windward"],["Untiefe","Shoal / shallow"],
  ["Fahrwasser","Fairway / channel"],["Tonne","Buoy"],["Dalben","Dolphin / mooring post"],["Poller","Bollard"],["Klampe","Cleat"]
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

const NAUTIC_EXPLAIN = [
  ['Seemeile (sm / NM)','Nautische Entfernungsangabe. 1 Seemeile entspricht exakt 1,852 km.'],
  ['Knoten (kn)','Geschwindigkeit auf dem Wasser. 1 Knoten bedeutet 1 Seemeile pro Stunde und entspricht 1,852 km/h.'],
  ['Kurs','Die Richtung, in die das Boot gesteuert wird; nautisch meist in Grad von 000° bis 359° angegeben.'],
  ['Peilung','Richtung von der eigenen Position zu einem Objekt oder Ziel, ebenfalls in Grad angegeben.'],
  ['Fahrt über Grund (SOG)','Tatsächliche Geschwindigkeit gegenüber dem Land bzw. Kartenhintergrund. Strömung und Wind können sie beeinflussen.'],
  ['Fahrt durchs Wasser (STW)','Geschwindigkeit des Bootes relativ zum umgebenden Wasser. Sie kann von der Fahrt über Grund abweichen.'],
  ['Luv / Lee','Luv ist die dem Wind zugewandte Seite, Lee die vom Wind abgewandte Seite.'],
  ['Abdrift','Seitliches Versetzen des Boots durch Wind oder Strömung.'],
  ['Tiefgang','Abstand von der Wasserlinie bis zum tiefsten Punkt des Boots. Für Artemis: 1,15 m.'],
  ['Höhe über Wasser / Air draught','Höhe von der Wasserlinie bis zum höchsten festen Punkt. Für Artemis: 4,15 m – wichtig bei Brücken.'],
  ['Fahrwasser','Der für die Schifffahrt vorgesehene und meist betonnt bzw. markierte Bereich eines Gewässers.'],
  ['Untiefe','Bereich mit geringer Wassertiefe, der für das eigene Boot gefährlich oder unpassierbar sein kann.'],
  ['Dalben','Starker Pfahl oder Pfahlgruppe im Wasser, z. B. zum Festmachen oder zur Führung an Schleusen und Häfen.'],
  ['Poller / Klampe','Poller befinden sich meist an Land, Klampen meist an Bord oder am Steg. Beide dienen zum Belegen von Leinen.']
];

const explainList=document.getElementById('nautic-explain-list');
if(explainList){
  NAUTIC_EXPLAIN.forEach(([term,desc])=>{
    const a=document.createElement('article');
    a.className='nautic-explain-card';
    a.innerHTML=`<strong>${term}</strong><p>${desc}</p>`;
    explainList.appendChild(a);
  });
}

function numValue(id){
  const el=document.getElementById(id);
  if(!el) return NaN;
  const raw=String(el.value||'').replace(',','.');
  return raw===''?NaN:Number(raw);
}
function fmt(n, digits=2){
  if(!Number.isFinite(n)) return '0';
  return n.toLocaleString('de-DE',{maximumFractionDigits:digits});
}
function bindConversion(inputId, outputId, factor, suffix, inverse=false){
  const inp=document.getElementById(inputId), out=document.getElementById(outputId);
  if(!inp||!out) return;
  const update=()=>{
    const v=numValue(inputId);
    const result=Number.isFinite(v)?(inverse?v/factor:v*factor):0;
    out.textContent=`${fmt(result,3)} ${suffix}`;
  };
  inp.addEventListener('input',update);
  update();
}
bindConversion('nm-input','km-output',1.852,'km');
bindConversion('km-input','nm-output',1.852,'sm',true);
bindConversion('kn-input','kmh-output',1.852,'km/h');
bindConversion('kmh-input','kn-output',1.852,'kn',true);
bindConversion('m-input','ft-output',3.280839895,'ft');

function activateTab(tabId, save=true){
  const btn = document.querySelector(`.tab[data-tab="${tabId}"]`);
  const panel = document.getElementById(tabId);
  if (!btn || !panel) return;
  document.querySelectorAll('.tab').forEach(b=>b.classList.remove('active'));
  document.querySelectorAll('.panel').forEach(p=>p.classList.remove('active'));
  btn.classList.add('active');
  panel.classList.add('active');
  if (save) {
    try { localStorage.setItem('artemisFunktafel.activeTab', tabId); } catch(e) {}
  }
  window.scrollTo({top:0,behavior:'auto'});
}

document.querySelectorAll('.tab').forEach(btn=>btn.addEventListener('click',()=>activateTab(btn.dataset.tab)));

try {
  const savedTab = localStorage.getItem('artemisFunktafel.activeTab');
  if (savedTab) activateTab(savedTab, false);
} catch(e) {}


const KNOTS = [
  {
    name:'1. Palstek', en:'Bowline',
    short:'Feste Schlaufe, die sich unter Last nicht zuzieht.',
    steps:[
      ['assets/bowline.png','Schritte 1–5: Bucht legen, Tampen durch die Bucht, um die stehende Part und zurück durch die Bucht.'],
    ],
    uses:[['assets/use-palstek-fender-real.jpg','Fenderleine mit fester Schlaufe'],['assets/use-palstek-kai-real.jpg','Schlaufe an einem Festmacherpunkt am Kai'],['assets/use-palstek-poller-real.jpg','Festmacher am Poller oder Dalben']]
  },
  {
    name:'2. Webeleinstek gesichert', en:'Secured clove hitch',
    short:'Webeleinstek mit zusätzlicher Sicherung durch einen halben Schlag – geeignet, wenn Fender oder Leine länger liegen bleiben.',
    steps:[
      ['assets/webeleinstek-gesichert-steps-approved.jpg','Schrittbild: der Webeleinstek wird an der Reling gelegt und anschließend für die Fenderleine verwendet.'],
      ['assets/webeleinstek-gesichert-final-approved.jpg','Fertiger gesicherter Webeleinstek: nach dem normalen Webeleinstek wird der lose Tampen mit einem zusätzlichen halben Schlag gesichert.']
    ],
    uses:[
      ['assets/webeleinstek-gesichert-fender-approved.jpg','Anwendung: Fender an Reling oder Handlauf mit gesichertem Webeleinstek'],
      ['assets/webeleinstek-gesichert-rail-approved.jpg','Anwendung: Leine an Rohr oder Stütze mit gesichertem Webeleinstek']
    ]
  },
  {
    name:'3. Rundtörn mit zwei halben Schlägen', en:'Round turn and two half hitches',
    short:'Festmacherknoten für Poller, Ring oder Dalben – auch bei Zug gut kontrollierbar.',
    steps:[['assets/half-hitch-post.jpg','Leine einmal vollständig um Poller/Ring führen (Rundtörn). Danach den Tampen zweimal als halben Schlag um die stehende Part legen und festziehen.']],
    uses:[['assets/use-rundtoern-post-real.jpg','am Festmacherpunkt oder Pfahl'],['assets/use-rundtoern-bollard-real.jpg','am Poller oder Dalben unter Last']]
  },
  {
    name:'4. Achtknoten', en:'Figure-eight knot',
    short:'Stopperknoten am Leinenende gegen unbeabsichtigtes Durchrutschen.',
    steps:[['assets/figure-eight.jpg','Tampen über die stehende Part führen, einmal herumlegen und durch die entstandene Schlaufe zurückführen. Sauber zur Acht dichtziehen.']],
    uses:[['assets/use-achtknoten-fairlead-real.jpg','Leine an Bord sauber führen und gegen Durchrutschen sichern'],['assets/use-achtknoten-ende-real.jpg','Leinenende an Deck sicher unter Kontrolle halten']]
  },
  {
    name:'5. Klampe belegen', en:'Cleat hitch',
    short:'Standard zum sicheren Belegen von Vorleine, Achterleine und Springs auf der Bootsklampe.',
    steps:[
      ['assets/cleat-step-diagram-approved.jpg','Schrittfolge: Leine zuerst um die vom Zug abgewandte Seite der Klampe führen, dann in Achtertörns über beide Hörner legen und mit einem Kopfschlag abschließen.'],
      ['assets/cleat-half-approved.jpg','Halbbelegte Klampe: die Leine liegt bereits sauber über den Hörnern, bevor der abschließende Kopfschlag gesetzt wird.'],
      ['assets/cleat-finish-approved.jpg','Fertig belegte Klampe mit abschließendem Kopfschlag.']
    ],
    uses:[
      ['assets/cleat-use-vorleine-approved.jpg','Originalbild: Vor- oder Achterleine auf einer Klampe sauber belegt'],
      ['assets/cleat-use-spring-approved.jpg','Originalbild: Belegungsprinzip der Klampe auch für eine Spring']
    ]
  }
];

function makeKnot(k){
  const a=document.createElement('article'); a.className='knot-card';
  const stepHTML=k.steps.map((s,i)=>`<figure class="step-figure"><div class="step-no">${i+1}</div><img src="${s[0]}" alt="${k.name} Schritt ${i+1}" loading="lazy"><figcaption>${s[1]}</figcaption></figure>`).join('');
  const useHTML=k.uses.map(u=>`<figure class="use-figure"><img src="${u[0]}" alt="${u[1]}" loading="lazy"><figcaption>${u[1]}</figcaption></figure>`).join('');
  a.innerHTML=`<div class="knot-head"><div><h3>${k.name}</h3><div class="knot-en">${k.en}</div></div></div><p class="knot-short">${k.short}</p><div class="mini-title">Knüpfen</div><div class="step-grid">${stepHTML}</div><div class="mini-title">Typische Einsätze</div><div class="use-grid">${useHTML}</div>`;
  return a;
}
const knotList=document.getElementById('knot-list');
if(knotList) KNOTS.forEach(k=>knotList.appendChild(makeKnot(k)));

function mooringCard(title,media,html){
  const a=document.createElement('article');
  a.className='mooring-card';
  a.innerHTML=`<h3>${title}</h3>${media}<div class="mooring-rich">${html}</div>`;
  return a;
}
const ml=document.getElementById('mooring-list');
if(ml){
  ml.appendChild(mooringCard('1. Längsseits am Kai',
    `<figure class="mooring-figure"><img class="mooring-svg" src="assets/mooring-side-photo.jpg" alt="Artemis längsseits mit Vorleine, Achterleine, Achterspring und Vorspring" loading="lazy"></figure>`,
    `<p><strong>Grundaufbau:</strong> Die Artemis liegt parallel zum Kai. Die <strong>Vorleine</strong> geht vom Bug nach vorn an den Kai, die <strong>Achterleine</strong> vom Heck nach achtern an den Kai. Diese beiden Leinen halten die Grundposition und begrenzen das seitliche Versetzen zusammen mit den Fendern.</p>
     <p><strong>Springs:</strong> Zusätzlich werden <strong>Achterspring</strong> und <strong>Vorspring</strong> gesetzt. Genau diese beiden Leinen verhindern, dass die Artemis am Kai entlang wandert. In der App ist die Standarddarstellung immer gleich: <strong>das feste Ende bleibt an Bord</strong>, das <strong>lose bzw. Arbeitsende</strong> geht an Land zum Poller, Ring oder zur Kai-Klampe.</p>
     <ul>
       <li><strong>Reihenfolge:</strong> zuerst Fender ausbringen, dann Vorleine und Achterleine sichern, danach die beiden Springs setzen.</li>
       <li><strong>Achterspring:</strong> vom hinteren Bereich der Artemis schräg nach vorn an den Kai.</li>
       <li><strong>Vorspring:</strong> vom vorderen Bereich der Artemis schräg nach achtern an den Kai.</li>
       <li><strong>Nachsetzen:</strong> erst wenn alle Leinen liegen, gleichmäßig dichtnehmen und den Abstand zum Kai kontrollieren.</li>
     </ul>`
  ));

  ml.appendChild(mooringCard('2. Rückwärts am Kai',
    `<figure class="mooring-figure"><img class="mooring-svg" src="assets/mooring-stern-photo.jpg" alt="Artemis rückwärts am Kai mit Heckleinen und optionalen Springs oder Bugleinen" loading="lazy"></figure>`,
    `<p><strong>Grundaufbau:</strong> Beim rückwärtigen Anlegen liegt das Heck der Artemis am Kai. Zuerst werden <strong>zwei Heckleinen</strong> – eine backbord, eine steuerbord – ausgebracht. Sie sichern die Grundposition des Hecks am Kai.</p>
     <p><strong>Bug stabilisieren:</strong> Damit das Vorschiff nicht seitlich ausbricht oder längs wandert, kommen zusätzlich <strong>Bugleinen oder Springs</strong> zum Einsatz. Je nach Hafen können die Heckleinen parallel oder gekreuzt geführt werden. Wichtig ist, dass das Boot mittig steht, sauber gefendert ist und auf beiden Seiten gleichmäßig arbeitet.</p>
     <ul>
       <li><strong>Vorbereitung:</strong> Heck- und Seitenfender vor dem Manöver auf richtige Höhe bringen.</li>
       <li><strong>Heckleinen:</strong> links und rechts zuerst sichern; sie halten das Boot am Kai.</li>
       <li><strong>Stabilisierung vorn:</strong> Bugleinen oder Springs nehmen die Restbewegung aus dem Vorschiff.</li>
       <li><strong>Endkontrolle:</strong> Landgang, Propellerfreiheit und Abstand zu Nachbarbooten prüfen.</li>
     </ul>`
  ));

  ml.appendChild(mooringCard('3. Springs ausführlich erklärt',
    `<div class="spring-detail-stack">
       <figure class="mooring-figure"><img class="mooring-svg" src="assets/spring-aft-detailed.svg" alt="Achterspring im Detail" loading="lazy"></figure>
       <figure class="mooring-figure"><img class="mooring-svg" src="assets/spring-forward-detailed.svg" alt="Vorspring im Detail" loading="lazy"></figure>
     </div>`,
    `<p><strong>Was ist eine Spring?</strong> Eine Spring ist eine schräg geführte Leine, die nicht in erster Linie das Boot zum Kai zieht, sondern die <strong>Längsbewegung entlang des Kais</strong> begrenzt. Sie ist also die Leine, die verhindert, dass die Artemis nach vorn oder nach achtern wandert.</p>
     <div class="detail-grid">
       <div class="detail-card">
         <h4>Achterspring</h4>
         <p>Die Achterspring liegt <strong>hinten auf der Artemis fest</strong>, meist auf der achteren Klampe. Das <strong>lose bzw. Arbeitsende</strong> geht <strong>nach vorn</strong> zu einem Poller, Ring oder einer Kai-Klampe. Sie verhindert das <strong>Vorlaufen</strong> des Bootes.</p>
         <p><strong>Merksatz:</strong> hinten fest – nach vorn an Land.</p>
       </div>
       <div class="detail-card">
         <h4>Vorspring</h4>
         <p>Die Vorspring liegt <strong>vorn auf der Artemis fest</strong>, also auf der vorderen Klampe. Das <strong>lose bzw. Arbeitsende</strong> läuft <strong>nach achtern</strong> zu einem Poller, Ring oder einer Kai-Klampe. Sie verhindert das <strong>Zurücksetzen</strong> des Bootes.</p>
         <p><strong>Merksatz:</strong> vorn fest – nach hinten an Land.</p>
       </div>
     </div>
     <p><strong>Wo ist fest, wo ist lose?</strong> Für die App gilt bewusst ein einheitliches Standardschema: <strong>fest an Bord, lose an Land</strong>. Das hilft beim Merken und beim Nachsetzen. Praktisch bedeutet das: Du belegst die Leine zuerst auf der entsprechenden Klampe der Artemis, führst das Arbeitsende an Land und legst es dort um Poller, Ring oder Klampe.</p>
     <p><strong>Wann setze ich Springs?</strong> Immer dann, wenn die Artemis nicht nur neben dem Kai liegen, sondern auch ruhig in ihrer Position bleiben soll. Vor- und Achterleine allein halten das Boot zwar grundsätzlich am Kai, aber die Springs nehmen die Bewegung entlang des Kais heraus und geben besonders bei Wind, Schwell oder unruhigem Liegen deutlich mehr Kontrolle.</p>`
  ));
}
