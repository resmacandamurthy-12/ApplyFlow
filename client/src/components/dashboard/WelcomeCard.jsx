import "./WelcomeCard.css";

import { FiArrowRight } from "react-icons/fi";

function WelcomeCard() {
  return (
    <section className="welcome-card">
      <div className="welcome-content">
        <h1>
          Good Evening,
          <br />
          <span>Resma</span>
        </h1>

        <p>
          Stay organized, keep applying consistently, and let ApplyFlow handle
          the tracking while you focus on landing your dream internship.
        </p>

        <button className="welcome-btn">
          View Applications
          <FiArrowRight />
        </button>
      </div>

      <div className="welcome-decoration">
        <div className="shape shape1"></div>
        <div className="shape shape2"></div>
        <div className="shape shape3"></div>
      </div>
    </section>
  );
}

export default WelcomeCard;
