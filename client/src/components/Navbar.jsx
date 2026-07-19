import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import logo from "../../public/logo.svg";
function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="ApplyFlow Logo" className="logo-image" />
        <span>ApplyFlow</span>
      </div>

      <ul className="navbar-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#features">Features</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
      </ul>

      <button className="navbar-button" onClick={() => navigate("/login")}>
        Login
      </button>
    </nav>
  );
}

export default Navbar;
