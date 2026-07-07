import { Link, Outlet } from "react-router-dom";
import { Sandpack } from "@codesandbox/sandpack-react";

const Hero = () => {
    return (
        <>
            <div className="hero-wrapper">
                <div className="hero-container">
                    <img src="/Examenopdracht-van-Berkan-en-Lukasz/assets/images/react-logo.png" alt="" />
                    <h1>React</h1>
                    <p>Een JavaScript-bibliotheek voor het bouwen van gebruikersinterfaces.</p>
                    <Link to="Documentatie">
                        <button>Beginnen</button>
                    </Link>
                </div>

                <div className="hero-container-2">
                    <div className="block">
                        <img src="/Examenopdracht-van-Berkan-en-Lukasz/assets/images/loop.png" alt="" />
                        <h1>Herbruikbaar</h1>
                        <p>React werkt met componenten. Dat zijn kleine onderdelen van een website, zoals een knop, navigatiebalk of kaartje. Je kunt deze onderdelen opnieuw gebruiken op verschillende pagina’s. Hierdoor hoef je minder code te schrijven en blijft een project overzichtelijker.</p>
                    </div>

                    <div className="block">
                        <img src="/Examenopdracht-van-Berkan-en-Lukasz/assets/images/watch.png" alt="" />
                        <h1>Snel</h1>
                        <p>React gebruikt een slimme techniek om alleen de delen van een pagina te vernieuwen die echt veranderen. Hierdoor laden websites sneller en voelt alles soepeler aan voor de gebruiker. Dit is vooral handig bij grote en interactieve websites.</p>
                    </div>

                    <div className="block">
                        <img src="/Examenopdracht-van-Berkan-en-Lukasz/assets/images/point.png" alt="" />
                        <h1>Interactief</h1>
                        <p>Met React kun je eenvoudig dynamische functies maken, zoals formulieren, live updates, menu’s en interactieve knoppen. Hierdoor voelen websites moderner en gebruiksvriendelijker aan, zonder dat de pagina steeds opnieuw hoeft te laden.</p>
                    </div>
                </div>

                <div className="hero-container-3">
                    <div className="sandpack">
                        <Sandpack
                            template="react"
                            files={{
                                "/App.js": `const Greeting = () => {
    return (
        <>
            <h1>Hello, I am Jason!</h1>
        </>
    );
}

export default Greeting;
`,
                            }}
                        />
                    </div>

                    <div className="hero-container-3-text-container">
                        <h1>Wat zijn components</h1>
                        <p>Componenten zijn herbruikbare bouwstenen van een React-applicatie. Deze component, genaamd Greeting, toont een koptekst met de tekst "Hello, I am Jason!". Door componenten te gebruiken kun je onderdelen van een website eenvoudig hergebruiken en overzichtelijk houden.</p>
                    </div>

                </div>

                <div className="hero-container-4">
                    <img src="/Examenopdracht-van-Berkan-en-Lukasz/assets/images/puzzle.png" alt="" />
                    <p>Componenten vormen de basis van React en spelen een centrale rol in de manier waarop React-applicaties worden opgebouwd. Vrijwel elk onderdeel van een applicatie wordt gemaakt met componenten, van kleine interface-elementen tot complete pagina's. Hierdoor zijn componenten een onmisbaar onderdeel van het ontwikkelen met React.</p>
                </div>

            </div>

        </>
    );
};

export default Hero;