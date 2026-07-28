import "./Sidebar.css";
import logo from "../../assets/logo.svg";
import { useLocation, useNavigate } from "react-router-dom";

import {
  FiGrid,
  FiBriefcase,
  FiHeart,
  FiBarChart2,
  FiUser,
  FiLogOut,
} from "react-icons/fi";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login", { replace: true });
  }

  return (
    <aside className="sidebar">
      {/* Logo */}

      <div className="sidebar-logo">
        <img src={logo} alt="ApplyFlow Logo" className="logo-image" />
        <div className="logo-text">
          <h2>ApplyFlow</h2>
          <span>Internship Tracker</span>
        </div>
      </div>

      {/* Navigation */}

      <nav className="sidebar-nav">
        <button
          className={
            location.pathname === "/dashboard" ? "nav-item active" : "nav-item"
          }
          onClick={() => navigate("/dashboard")}
        >
          <FiGrid />
          <span>Dashboard</span>
        </button>

        <button
          className={
            location.pathname === "/applications"
              ? "nav-item active"
              : "nav-item"
          }
          onClick={() => navigate("/applications")}
        >
          <FiBriefcase />
          <span>Applications</span>
        </button>

        <button className="nav-item">
          <FiHeart />
          <span>Wishlist</span>
        </button>

        <button className="nav-item">
          <FiBarChart2 />
          <span>Analytics</span>
        </button>

        <button className="nav-item">
          <FiUser />
          <span>Profile</span>
        </button>
      </nav>

      {/* Bottom */}

      <div className="sidebar-bottom">
        <button onClick={handleLogout} className="logout-btn">
          <FiLogOut />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
