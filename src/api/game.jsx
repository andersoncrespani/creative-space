import { useState, useEffect } from 'react';
import axios from 'axios';
import './game.css';
import '../variaveis/styles.css'

export function GameDeals() {
  const [giveaways, setGiveaways] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://www.gamerpower.com/api/giveaways')
      .then((response) => {
        setGiveaways(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 6); 
  };

  if (loading) return <p className='carregando-nov'>Carregando novidades...</p>;

  return (
    <div className="game-news-container">
      <h2 className="game-news-title">Jogos Grátis e Promoções</h2>
      
      <div className="game-cards-grid">
        {giveaways.slice(0, visibleCount).map((item) => (
          <div key={item.id} className="game-card">
            <div className="game-card-content">
              <img src={item.image} alt={item.title} className="game-card-image" />
              <h3 className="game-card-title">{item.title}</h3>
              <p className="game-card-platform">
                <strong>Plataforma:</strong> {item.platforms}
              </p>
              <p className="game-card-description">{item.description}</p>
            </div>

            <a 
              href={item.open_giveaway_url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="game-card-button"
            >
              ver mais
            </a>
          </div>
        ))}
      </div>

      {}
      {visibleCount < giveaways.length && (
        <div className="load-more-container">
          <button onClick={handleLoadMore} className="load-more-button">
            Ver mais
          </button>
        </div>
      )}
    </div>
  );
}