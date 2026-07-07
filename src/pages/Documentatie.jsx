import Cards from "../components/Cards";
import { useState } from "react";
import data from "../data/data";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Documentatie = () => {
    const navigate = useNavigate()
    const [showData, setShowData] = useState(data);



    const goToDetail = (cardId) => {
        navigate(`/cardDetail/${cardId}`);
    };


    return (
        <main>

            <section className="doc-container">

                <h1 className="doc-h1">React leren!</h1>
                <p className="doc-p">Welkom op de documentatiepagina! Hier leer je de belangrijkste onderdelen van React en hoe je deze gebruikt om interactieve webapplicaties te bouwen.</p>

                <section className="cardcontainer">

                    {showData.map((d, index) => (
                        <Cards key={d.id} title={d.title} description={d.descriptions} id={d.id} onShowDetail={goToDetail} />
                    ))}

                </section>
                <Footer />
            </section>

        </main >
    );
}

export default Documentatie;
