import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>ApplyFlow</h2>

          <p>
            Simplifying internship tracking for students with a clean,
            organized, and modern experience.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <Link to="/login">Login</Link>
        </div>

        <div className="footer-tech">
          <h3>Built With</h3>

          <p>React</p>
          <p>Express</p>
          <p>PostgreSQL</p>
          <p>Node.js</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 ApplyFlow. Built with ❤️ by Resma.</p>
      </div>
    </footer>
  );
}

export default Footer;
