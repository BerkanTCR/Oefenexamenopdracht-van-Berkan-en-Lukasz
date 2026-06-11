import Cards from "../components/Cards";
import { useState } from "react";
import data from "../data/data";
import { useNavigate } from "react-router-dom";


const Documentatie = () => {
    const navigate = useNavigate()
    const [showData, setShowData] = useState(data);
    const colors = ['#FF6FB5', '#3498DB', '#8E44AD', '#E67E22', '#2ECC71', '#E74C3C', '#8B5E3C', '#F1C40F', '#1ABC9C'];


  const goToDetail = (cardId) => {
    navigate(`/cardDetail/${cardId}`);
  };


    return (
        <main>

            <aside className="sidebar">
                <ul>
                    <li className="ads">Ga aan de slag</li>
                    <li> components</li>
                     <li> Props</li>
                     <li> useState</li>
                     <li> useEffect</li>
                     <li> Router</li>
                <li> List & Keys</li>
                <li> Events</li>
                <li>Forms & input</li>
                <li> useNavigate</li>
                </ul>
            
            </aside>

            <section className="doc-container">

                <h2>React leren</h2>
                <p>Welkom op de documentatiepagina! Hier leer je de belangrijkste onderdelen van React en hoe je deze gebruikt om interactieve webapplicaties te bouwen.</p>
                <h3>Wat is react</h3>
                <p>React is een JavaScript-library waarmee je gebruikersinterfaces (UI) kunt bouwen voor webapplicaties. Het wordt vooral gebruikt om interactieve en dynamische websites te maken.</p>

                <section className="cardcontainer">

                    {showData.map((d, index) => (
                        <Cards key={d.id} title={d.title} description={d.descriptions} id={d.id} onShowDetail={goToDetail} color={colors[index] } />
                    ))}

                </section>

            </section>

        </main >
    );
}

export default Documentatie;
