const data = [
    {
        id: 1,
        title: "Components",
        descriptions: "React components zijn herbruikbare UI-blokken.",

        infoTop: `
Components vormen de basis van iedere React-applicatie. Een React app is opgebouwd uit kleine herbruikbare onderdelen die samen de volledige interface vormen.

In plaats van één grote pagina te bouwen, split je alles op in losse components zoals navigatiebars, buttons, kaarten en formulieren. Dit maakt je project veel overzichtelijker en makkelijker te onderhouden.

Elke component heeft één duidelijke taak, waardoor je code schaalbaar blijft.
    `,

        code: `
function Card({ title }) {
  return (
    <div style={{ padding: "10px", border: "1px solid #ccc" }}>
      <h3>{title}</h3>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Card title="Navbar component" />
      <Card title="Footer component" />
      <Card title="Product card" />
    </>
  );
}
    `,

        infoBottom: `
Components zorgen ervoor dat je code herbruikbaar wordt. Je schrijft een component één keer en gebruikt hem daarna overal in je app.

React components zijn function components: simpele JavaScript functies die JSX teruggeven.

Dit maakt samenwerken in teams makkelijker omdat iedereen aan losse onderdelen kan werken.
    `
    },

    {
        id: 2,
        title: "Props",
        descriptions: "React props geven data door aan components.",

        infoTop: `
Props (properties) worden gebruikt om data door te geven van de ene component naar de andere.

Meestal stuurt een parent component informatie naar een child component. Hierdoor kun je één component flexibel gebruiken voor verschillende data.
    `,

        code: `
function Button({ text }) {
  return <button>{text}</button>;
}

export default function App() {
  return (
    <>
      <Button text="Opslaan" />
      <Button text="Annuleren" />
      <Button text="Versturen" />
    </>
  );
}
    `,

        infoBottom: `
Props zijn read-only, wat betekent dat ze niet aangepast mogen worden binnen een component.

Dit zorgt voor een voorspelbare dataflow binnen je applicatie.

Door props kun je één component hergebruiken in veel verschillende situaties zonder extra code te schrijven.
    `
    },

    {
        id: 3,
        title: "useState",
        descriptions: "React useState bewaart veranderbare data.",

        infoTop: `
useState is een React Hook waarmee je state toevoegt aan function components.

State is data die kan veranderen tijdens het gebruik van de applicatie, zoals een teller, inputveld of toggle menu.
    `,

        code: `
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Verhoog
      </button>
    </div>
  );
}
    `,

        infoBottom: `
Wanneer state verandert, rendert React automatisch de component opnieuw.

useState bestaat uit twee delen:
- de huidige waarde
- een functie om die waarde te updaten

Hierdoor kun je interactieve interfaces bouwen die reageren op gebruikersacties.
    `
    },

    {
        id: 4,
        title: "useEffect",
        descriptions: "React useEffect voert code uit na rendering.",

        infoTop: `
useEffect is een Hook voor side effects.

Side effects zijn acties zoals API calls, timers of het aanpassen van externe data buiten de render van de component.
    `,

        code: `
import { useEffect, useState } from "react";

export default function App() {
  const [message, setMessage] = useState("Laden...");

  useEffect(() => {
    setTimeout(() => {
      setMessage("Data geladen!");
    }, 1500);
  }, []);

  return <h1>{message}</h1>;
}
    `,

        infoBottom: `
useEffect bepaalt wanneer code wordt uitgevoerd:
- geen dependency array → elke render
- lege array → alleen bij mount
- dependencies → wanneer bepaalde values veranderen

Dit maakt het ideaal voor data fetching en synchronisatie.
    `
    },

    {
        id: 5,
        title: "Router",
        descriptions: "React Router beheert navigatie tussen pagina’s",

        infoTop: `
React Router zorgt ervoor dat je binnen een single-page application kunt navigeren zonder dat de pagina opnieuw laadt.

Dit geeft een snelle en moderne gebruikerservaring.
    `,

        code: `
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h1>Home</h1>;
}

function About() {
  return <h1>About</h1>;
}

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
    `,

        infoBottom: `
React Router koppelt URLs aan components.

Dit is essentieel voor moderne apps zoals dashboards, webshops en SaaS platforms waar meerdere pagina’s nodig zijn zonder reload.
    `
    },

    {
        id: 6,
        title: "List & Keys",
        descriptions: "React lists & keys tonen lijsten efficiënt.",

        infoTop: `
In React kun je lijsten van data tonen met de JavaScript functie .map().

Dit wordt vaak gebruikt voor arrays zoals producten, comments of gebruikers.
    `,

        code: `
const items = ["Apple", "Banana", "Orange"];

export default function App() {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
    `,

        infoBottom: `
Keys helpen React om te herkennen welke items veranderd zijn.

Zonder keys kan React inefficiënt opnieuw renderen.

In echte projecten gebruik je meestal een unieke ID in plaats van een index.
    `
    },

    {
        id: 7,
        title: "Events",
        descriptions: "React events reageren op gebruikersacties.",

        infoTop: `
Events maken een website interactief.

Zonder events zou een website alleen statische informatie tonen zonder reacties op gebruikers.
    `,

        code: `
export default function App() {
  function handleClick() {
    alert("Button clicked!");
  }

  return <button onClick={handleClick}>Klik mij</button>;
}
    `,

        infoBottom: `
React gebruikt Synthetic Events waardoor events consistent werken in alle browsers.

Events worden vaak gecombineerd met state om dynamische UI te maken.
    `
    },

    {
        id: 8,
        title: "Forms & inputs",
        descriptions: "React forms & inputs verwerken gebruikersinvoer.",

        infoTop: `
Forms worden gebruikt om data van gebruikers te verzamelen zoals login, registratie en zoekvelden.

Ze vormen een belangrijk onderdeel van elke interactieve website.
    `,

        code: `
import { useState } from "react";

export default function App() {
  const [text, setText] = useState("");

  return (
    <>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>{text}</p>
    </>
  );
}
    `,

        infoBottom: `
Controlled inputs geven je volledige controle over gebruikersdata.

Je kunt validatie, foutmeldingen en realtime feedback toevoegen om de UX te verbeteren.
    `
    },

    {
        id: 9,
        title: "useNavigate",
        descriptions: "React Router useNavigate navigeert naar een andere pagina.",

        infoTop: `
useNavigate is een hook van React Router waarmee je gebruikers via code naar een andere pagina kunt sturen zonder links te gebruiken.
    `,

        code: `
import { useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate("/about")}>
      Ga naar About
    </button>
  );
}
    `,

        infoBottom: `
Dit wordt vaak gebruikt na acties zoals login, form submit of betalingen.

Het geeft je volledige controle over navigatie binnen je applicatie.
    `
    }
];

export default data;