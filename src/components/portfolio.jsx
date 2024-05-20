import React, { useState } from "react";
import "./portfolio.css";

function Portfolio() {
  const [showMiniGames, setShowMiniGames] = useState(true);
  const [showMiniProject, setShowMiniProject] = useState(false);
  const [showUIUX, setShowUIUX] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  const togglegame = () => {
    setShowMiniGames(true);
    setShowMiniProject(false);
    setShowUIUX(false);
  };

  const toggleproject = () => {
    setShowMiniGames(false);
    setShowMiniProject(true);
    setShowUIUX(false);
  };

  const toggleUIUX = () => {
    setShowMiniGames(false);
    setShowMiniProject(false);
    setShowUIUX(true);
  };

  const handleCardHover = (cardNumber) => {
    setHoveredCard(cardNumber);
  };

  const openGamePage = (cardNumber) => {
    const gameUrls = [
      "https://than-arthurleywin.github.io/KertasGuntingBatu/",
      "https://than-arthurleywin.github.io/gametebak/",
      "https://game3.com",
    ];
    window.open(gameUrls[cardNumber - 1], "_blank");
  };

  const openProjectPage = (cardNumber) => {
    const projectUrls = [
      "https://safenet-insights.vercel.app/",
      "https://than-arthurleywin.github.io/indeksmasatubuh/",
      "https://fthrrmdnmln.000webhostapp.com/index.html",
      "https://project4.com",
    ];
    window.open(projectUrls[cardNumber - 1], "_blank");
  };

  const openUIUXPage = (cardNumber) => {
    const uiuxUrls = ["https://uiux1.com", "https://uiux2.com", "https"];
    window.open(uiuxUrls[cardNumber - 1], "_blank");
  };

  const getCardTitle = (cardNumber) => {
    const gameTitles = ["Kertas Gunting Batu", "Tebak Angka", "Coming Soon"];
    const projectTitles = [
      "Pemberdayaan Perempuan",
      "Indeks Masa Tubuh",
      "Cuisine",
      "Coming Soon",
    ];
    const uiuxTitles = ["UI/UX Design 1", "UI/UX Design 2", "Coming Soon"];
    if (showMiniGames) return gameTitles[cardNumber - 1];
    else if (showMiniProject) return projectTitles[cardNumber - 1];
    else return uiuxTitles[cardNumber - 1];
  };

  return (
    <div className="portfolio">
      <h1>Portfolio</h1>
      <div className="portfolio-project">
        <div className="mini-project">
          <div
            className={`miniGames ${showMiniGames ? "active" : ""}`}
            onClick={togglegame}
          >
            <h3>Mini Games</h3>
            <div className={`lines ${showMiniGames ? "active" : ""}`}></div>
          </div>
          <div
            className={`miniProject ${showMiniProject ? "active" : ""}`}
            onClick={toggleproject}
          >
            <h3>Mini Project</h3>
            <div className={`ulines ${showMiniProject ? "active" : ""}`}></div>
          </div>
          <div
            className={`uiux ${showUIUX ? "active" : ""}`}
            onClick={toggleUIUX}
          >
            <h3>UI/UX</h3>
            <div className={`ulines ${showUIUX ? "active" : ""}`}></div>
          </div>
        </div>
        <div className="portfolio-cards">
          {showMiniGames && (
            <div className="portfolio-mini-games">
              <div className="cards-container">
                {[1, 2, 3].map((cardNumber) => (
                  <div
                    key={cardNumber}
                    className={`cards cards-${cardNumber}`}
                    onMouseEnter={() => handleCardHover(cardNumber)}
                    onMouseLeave={() => handleCardHover(null)}
                  >
                    <div
                      className={`isi ${
                        hoveredCard === cardNumber ? "active" : ""
                      }`}
                    >
                      <h4>{getCardTitle(cardNumber)}</h4>
                      <button onClick={() => openGamePage(cardNumber)}>
                        See
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {showMiniProject && (
            <div className="portfolio-mini-project">
              <div className="cards-container">
                {[1, 2, 3, 4].map((cardNumber) => (
                  <div
                    key={cardNumber}
                    className={`cards cardsi-${cardNumber}`}
                    onMouseEnter={() => handleCardHover(cardNumber)}
                    onMouseLeave={() => handleCardHover(null)}
                  >
                    <div
                      className={`isi ${
                        hoveredCard === cardNumber ? "active" : ""
                      }`}
                    >
                      <h4>{getCardTitle(cardNumber)}</h4>
                      <button onClick={() => openProjectPage(cardNumber)}>
                        See
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {showUIUX && (
            <div className="portfolio-uiux">
              <div className="cards-container">
                {[1, 2, 3].map((cardNumber) => (
                  <div
                    key={cardNumber}
                    className={`cards cardsu-${cardNumber}`}
                    onMouseEnter={() => handleCardHover(cardNumber)}
                    onMouseLeave={() => handleCardHover(null)}
                  >
                    <div
                      className={`isi ${
                        hoveredCard === cardNumber ? "active" : ""
                      }`}
                    >
                      <h4>{getCardTitle(cardNumber)}</h4>
                      <button onClick={() => openUIUXPage(cardNumber)}>
                        See
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
