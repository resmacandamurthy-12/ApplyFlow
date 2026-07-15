import "./Hero.css";
import { useState } from "react";
function Hero(props) {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [timer, setTimer] = useState(0);

  function handleClick() {
    console.log("Button clicked!");
    setButtonClicked(true);
  }

  return (
    <main className="hero">
      <h1 className="hero-title">{props.title}</h1>
      <p className="hero-description">{props.description}</p>
      <button onClick={handleClick} className="hero-button">
        {buttonClicked ? "Loading..." : props.buttonLabel}
      </button>
      <h2>{timer}</h2>
      <button onClick={() => setTimer(timer + 1)}>+</button>
      <button onClick={() => setTimer(timer - 1)}>-</button>
    </main>
  );
}

export default Hero;
