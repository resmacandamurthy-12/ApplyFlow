import "./Hero.css";
//import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Hero(props) {
  const navigate = useNavigate();

  return (
    <main className="hero">
      <h1 className="hero-title">{props.title}</h1>
      <p className="hero-description">{props.description}</p>
      <button onClick={() => navigate("/login")} className="hero-button">
        {props.buttonLabel}
      </button>
    </main>
  );
}

export default Hero;
