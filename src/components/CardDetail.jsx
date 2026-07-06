import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import data from '../data/data.js';
import { Sandpack } from '@codesandbox/sandpack-react';

const CardDetail = () => {
  const { cardId } = useParams();
  const navigate = useNavigate();
  const [cardList, setCardList] = useState(data);

  const card = cardList.find(p => p.id === Number(cardId));

  if (!card) {
    return <div>Pagina niet gevonden!</div>;
  }

  return (
    <section className="card-info">
      <button className="back-button" onClick={() => navigate('/documentatie')}>
        ← Terug naar overzicht
      </button>

      <h1 className="card-title">{card.title}</h1>

      <p className="card-description">{card.infoTop}</p>

      <Sandpack
        template="react"
        files={{
          "/App.js": card.code
        }}
      />

      <p className="card-description">{card.infoBottom}</p>

    </section>
  );
};

export default CardDetail;