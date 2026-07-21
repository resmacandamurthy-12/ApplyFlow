import "./CTA.css";
import { useNavigate } from "react-router-dom";

function CTA() {
  const navigate = useNavigate();

  return (
    <section className="cta">
      <div className="cta-card">
        <p className="cta-tag">Ready to Get Started?</p>

        <h2 className="cta-title">
          Organize Every Internship
          <br />
          With ApplyFlow
        </h2>

        <p className="cta-description">
          Stop managing applications with spreadsheets and notes. Keep
          everything organized in one beautiful dashboard.
        </p>

        <button className="cta-button" onClick={() => navigate("/login")}>
          Get Started
        </button>
      </div>
    </section>
  );
}

export default CTA;
