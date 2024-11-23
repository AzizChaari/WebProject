import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header id="header">
      <nav className="nav">
        <div className="logo">
          <img src="../src/assets/images/icon/logo.png" alt="logo" />
        </div>
        <ul className="nav-links">
          <li><a className="active" href="/">Home</a></li>
          <li><a href="#portfolio_section">Portfolio</a></li>
          <li><a href="#team_section">Team</a></li>
          <li><a href="#services_section">Services</a></li>
          <li><a href="#contactus_section">Contact</a></li>
        </ul>
        <div className="srch">
          <input type="text" className="search" placeholder="Search here..." />
          <img src="../src/assets/images/icon/search.png" alt="search" />
        </div>
        <a className="get-started" href="/login">Get Started</a>
        <img
          src="../src/assets/images/icon/menu.png"
          className="menu"
          alt="menu"
          onClick={() => console.log("Open menu")}
        />
      </nav>
      <div className="head-container">
        <div className="quote">
          <p>
            La plateforme collaborative qui centralise vos ressources pédagogiques et favorise la réussite
          </p>
          <h5>
            Accédez aux cours, partagez vos notes et intéragissez avec la communauté Sup'Com
          </h5>
          <div className="play">
            <img src="../src/assets/images/icon/play.png" alt="play" />
            <span>
              <a href="https://www.youtube.com/watch?v=KFyrgDO1WXk" target="_blank" rel="noopener noreferrer">
                Watch Now
              </a>
            </span>
          </div>
        </div>
        <div className="svg-image">
          <img src="../src/assets/images/extra/Asset 4.svg" alt="svg" />
        </div>
      </div>
    </header>
  );
};

export default Header;