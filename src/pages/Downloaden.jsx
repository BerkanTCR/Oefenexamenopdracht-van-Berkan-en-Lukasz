import Footer2 from "../components/Footer2";
const Downloaden = () => {
    return (
        <>
            <div className="download-h1-container">
                <h1>Downloaden</h1>
            </div>

            <div className="download-container">

                <div className="nodejs-container">
                    <p>Node.js® is een gratis, open-source en platformonafhankelijke JavaScript-runtimeomgeving waarmee ontwikkelaars servers, webapplicaties, opdrachtregelprogramma's (CLI-tools) en scripts kunnen maken.</p>
                    <p>Node.js® is nodig om React-projecten te ontwikkelen en uit te voeren tijdens het bouwen. Het zorgt ervoor dat React-code wordt omgezet naar JavaScript die de browser begrijpt. Daarom is Node.js een belangrijk hulpmiddel bij het werken met React.</p>
                </div>

                <div className="nodejs-logo-container">
                    <img src="/src/assets/nodejs-logo.png" alt="" />
                </div>

            </div >

            <div className="download-buttons-container">
                <a href="https://nodejs.org/en">
                    <button>Downloaden</button>
                </a>
            </div>

            <Footer2 />

        </>
    );
}

export default Downloaden;