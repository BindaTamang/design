import React from "react";
import "./ChooseHeros.scss";

const ChooseHeros = ({ heros }) => {
  return (
    <div className="choosehero">
      <h1>Choose <span className="highlight-red">your hero</span></h1>
      <div className="hero-card">
        {heros.map((hero, index) => (
          <div className="hero-item" key={index}>
            <div className="hero-image">
              <img src={hero.image} alt={hero.name} />
            </div>
            <div className="hero-description">
              <h2>{hero.name}</h2>
              <p>{hero.subname}</p>
              <div className="character-status">
                {hero.characterstatus.map((status, i) => (
                  <div className="progress-container" key={i}>
                    <div
                      className={`progress-bar ${status.name.toLowerCase()}`}
                      style={{ width: `${status.completion}%` }}
                    >
                      <span className="status-text">{status.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseHeros;
