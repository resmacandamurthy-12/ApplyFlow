import "./Hero.css";
import { useNavigate } from "react-router-dom";
//import heroImage from "../assets/hero.png";

function Hero() {
  const navigate = useNavigate();

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-left">
          <p className="hero-tag">Internship Tracking Made Simple</p>

          <h1 className="hero-title">
            Track Every Internship
            <br />
            In One Place
          </h1>

          <p className="hero-description">
            Organize applications, monitor interview stages, save wishlist
            companies and never miss an important deadline again.
          </p>

          <div className="hero-points">
            <span>✔ Organize Applications</span>

            <span>✔ Track Interview Progress</span>

            <span>✔ Export Application Data</span>
          </div>

          <button className="hero-button" onClick={() => navigate("/login")}>
            Get Started
          </button>
        </div>

        <div className="hero-right">Hero Image</div>
      </div>
    </section>
  );
}

export default Hero;
