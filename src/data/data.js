

const data = [
    {
        id: 1,
        title: "Components",
        descriptions: "React components zijn herbruikbare UI-blokken.",
        info: `
Components vormen de basis van iedere React-applicatie. In plaats van een volledige website in één groot bestand te schrijven, deel je de interface op in kleine, herbruikbare onderdelen. Denk bijvoorbeeld aan een navigatiebalk, footer, productkaart of formulier. Elk onderdeel krijgt zijn eigen component met een eigen functie.

    Het grote voordeel van components is dat je code overzichtelijker en beter onderhoudbaar wordt. Wanneer je een knop of kaartje meerdere keren nodig hebt, hoef je deze maar één keer te maken. Daarna kun je dezelfde component overal opnieuw gebruiken. Dit bespaart tijd en voorkomt dubbele code.

    React werkt met function components. Dit zijn JavaScript-functies die JSX teruggeven. JSX lijkt op HTML, maar wordt geschreven binnen JavaScript. Hierdoor kun je logica en interface eenvoudig combineren.

    Door je applicatie op te delen in components wordt samenwerken ook makkelijker. Iedere developer kan werken aan een apart onderdeel van de applicatie zonder dat alles door elkaar loopt.`

    },
     {
        id: 2,
        title: "Props",
        descriptions: "React props geven data door aan components.",
        info: `Props staat voor “properties” en worden gebruikt om gegevens door te geven tussen components. Meestal geeft een parent component data door aan een child component. Hierdoor kun je dynamische en flexibele interfaces bouwen.

Stel dat je een productkaart hebt voor een webshop. In plaats van voor ieder product een aparte component te maken, kun je één component gebruiken en via props verschillende gegevens meegeven, zoals de naam, prijs en afbeelding van het product.

Props zijn read-only. Dat betekent dat een component de ontvangen gegevens niet direct mag aanpassen. Dit zorgt ervoor dat de dataflow binnen React duidelijk en voorspelbaar blijft.

Props maken components herbruikbaar. Eén component kan namelijk verschillende informatie tonen afhankelijk van welke props worden meegegeven. Hierdoor schrijf je minder code en wordt je applicatie makkelijker schaalbaar.

Daarnaast kunnen props niet alleen tekst bevatten, maar ook functies, arrays, objecten en zelfs andere components. Hierdoor zijn props een belangrijk onderdeel van communicatie binnen React-applicaties.`


    },
    {
        id: 3,
        title: "useState",
        descriptions: "React useState bewaart veranderbare data.",
        info: `UseState is een Hook in React waarmee je state kunt toevoegen aan function components. State is informatie die kan veranderen tijdens het gebruik van de applicatie. Denk bijvoorbeeld aan een teller, een geopende modal, een winkelwagen of de inhoud van een inputveld.

Wanneer de state verandert, rendert React de component automatisch opnieuw. Hierdoor blijft de gebruikersinterface altijd synchroon met de actuele gegevens.

Met useState kun je interactieve websites maken. Zonder state zouden gebruikers geen dynamische veranderingen zien wanneer ze ergens op klikken of gegevens invoeren.

De Hook bestaat uit twee onderdelen:

de actuele waarde van de state
een functie om die waarde aan te passen

Bijvoorbeeld:

een teller die omhoog gaat wanneer je op een knop klikt
een menu dat opent en sluit
een formulier dat gebruikersinvoer opslaat

State helpt React om veranderingen binnen de applicatie efficiënt bij te houden. Hierdoor reageren websites snel op acties van gebruikers zonder dat de volledige pagina opnieuw geladen hoeft te worden.`

    },
    {
        id: 4,
        title: "useEffect",
        descriptions: "React useEffect voert code uit na rendering.",
        info:`useEffect is een Hook waarmee je side effects kunt uitvoeren binnen een component. Side effects zijn acties die buiten het normale renderproces vallen. Denk bijvoorbeeld aan:

data ophalen uit een API
timers gebruiken
event listeners toevoegen
de titel van de pagina aanpassen

Een component rendert normaal gesproken alleen de interface, maar soms moet er extra logica uitgevoerd worden nadat de component geladen is. Hiervoor gebruik je useEffect.

Met dependency arrays kun je bepalen wanneer de effect-functie uitgevoerd moet worden:

zonder dependency array → na iedere render
met lege array [] → alleen bij het laden van de component
met dependencies → wanneer bepaalde waarden veranderen

useEffect wordt veel gebruikt in combinatie met API-calls. Bijvoorbeeld om gebruikersgegevens op te halen zodra een pagina geopend wordt.

Daarnaast kun je met cleanup functions ervoor zorgen dat oude listeners of timers netjes worden verwijderd. Dit voorkomt geheugenlekken en zorgt voor betere prestaties.`

    },
    {
        id: 5,
        title: "Router",
        descriptions: "React Router beheert navigatie tussen pagina’s",
        info:`Een router zorgt ervoor dat gebruikers tussen verschillende pagina’s kunnen navigeren binnen een React-applicatie zonder dat de hele website opnieuw geladen wordt. Dit maakt de applicatie sneller en zorgt voor een soepelere gebruikerservaring.

In React wordt vaak React Router gebruikt. Hiermee kun je routes maken voor pagina’s zoals:

Home
About
Contact
Dashboard

Bij traditionele websites wordt iedere pagina opnieuw geladen vanaf de server. Bij React-applicaties gebeurt navigatie meestal client-side. Dat betekent dat alleen de inhoud verandert terwijl de pagina zelf actief blijft.

Een router koppelt URL’s aan specifieke components. Wanneer een gebruiker naar een bepaalde route gaat, toont React automatisch de juiste pagina.

Ook kun je dynamische routes maken, bijvoorbeeld voor productpagina’s of gebruikersprofielen. Hierdoor kun je één route gebruiken voor meerdere soorten content.

Routing is essentieel voor moderne single-page applications (SPA’s), omdat het zorgt voor snelle navigatie en een app-achtige ervaring.`
    },
    {
        id: 6,
        title: "List & Keys",
        descriptions: "React lists & keys tonen lijsten efficiënt.",
        info:`In React kun je eenvoudig lijsten van gegevens tonen met behulp van JavaScript-methodes zoals .map(). Dit wordt vaak gebruikt voor:

producten in een webshop
berichten op social media
gebruikerslijsten
comments

Bij iedere lijst moet React weten welk element uniek is. Daarom gebruik je keys. Een key is een unieke waarde die React helpt om elementen efficiënt bij te werken.

Wanneer gegevens veranderen, vergelijkt React oude en nieuwe elementen met elkaar. Dankzij keys weet React precies welke onderdelen aangepast, toegevoegd of verwijderd zijn.

Goede keys verbeteren de prestaties van je applicatie. Vaak wordt een unieke ID gebruikt als key.

Zonder keys kan React waarschuwingen geven en kunnen updates minder efficiënt verlopen. Daarom zijn keys belangrijk bij het werken met dynamische content.

Lists en keys maken het mogelijk om grote hoeveelheden data overzichtelijk en dynamisch weer te geven binnen je applicatie.`
    },
    {
        id: 7,
        title: "Events",
        descriptions: "React events reageren op gebruikersacties.",
        info:`Events zorgen ervoor dat gebruikers kunnen communiceren met een website. Zonder events zou een website volledig statisch zijn en nergens op reageren.

In React worden events gebruikt voor acties zoals:

klikken op een knop
typen in een inputveld
bewegen met de muis
versturen van een formulier

React gebruikt hiervoor event handlers zoals:

onClick
onChange
onSubmit
onMouseOver

Wanneer een event plaatsvindt, wordt automatisch een functie uitgevoerd. Hiermee kun je state aanpassen, data versturen of onderdelen van de interface veranderen.

Events zijn een belangrijk onderdeel van interactieve webapplicaties. Ze zorgen ervoor dat gebruikers realtime feedback krijgen op hun acties.

React gebruikt een eigen systeem genaamd Synthetic Events. Dit zorgt ervoor dat events consistent werken in verschillende browsers.

Door events slim te combineren met state en props kun je krachtige interactieve interfaces bouwen.`
    },
    {
        id: 8,
        title: "Forms & inputs",
        descriptions: "React forms & inputs verwerken gebruikersinvoer.",
        info:`Forms en inputs worden gebruikt om gegevens van gebruikers te verzamelen. Denk bijvoorbeeld aan:

inlogformulieren
registratiepagina’s
zoekbalken
contactformulieren

In React worden formulieren vaak gekoppeld aan state. Dit betekent dat de waarde van een inputveld direct wordt opgeslagen binnen de component.

Dit heet een controlled component. Hierdoor heb je volledige controle over wat gebruikers invoeren en kun je eenvoudig validatie toevoegen.

Met forms kun je:

controleren of velden correct zijn ingevuld
foutmeldingen tonen
gegevens versturen naar een server
realtime feedback geven

Inputs reageren meestal op onChange events. Iedere keer dat een gebruiker typt, wordt de state bijgewerkt.

Goede formulierafhandeling is belangrijk voor gebruiksvriendelijke websites. Een duidelijk formulier zorgt voor minder fouten en een betere gebruikerservaring.`

    },
    {
        id: 9,
        title: "useNavigate",
        descriptions: "React Router useNavigate navigeert naar een andere pagina.",
        info:`useNavigate is een Hook uit React Router waarmee je gebruikers programmatisch naar een andere pagina kunt sturen.

Normaal gesproken navigeert een gebruiker via links of knoppen, maar soms wil je automatisch een andere pagina openen nadat een actie is uitgevoerd. Bijvoorbeeld:

na succesvol inloggen
na het versturen van een formulier
na het afronden van een betaling

Met useNavigate kun je routes wijzigen via JavaScript. Hierdoor krijg je meer controle over de navigatie binnen je applicatie.

Je kunt gebruikers ook terugsturen naar de vorige pagina of dynamische routes openen op basis van bepaalde gegevens.

useNavigate wordt veel gebruikt in moderne React-applicaties omdat het zorgt voor flexibele en dynamische navigatie zonder volledige pagina-herladingen.

Door routing en navigatie slim te combineren kun je een professionele gebruikerservaring creëren die snel en soepel aanvoelt.`
    }
]

export default data;