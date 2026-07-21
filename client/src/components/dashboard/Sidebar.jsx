import "./Sidebar.css";
import logo from "../../assets/logo.svg";

import {
  FiGrid,
  FiBriefcase,
  FiHeart,
  FiBarChart2,
  FiUser,
  FiLogOut,
} from "react-icons/fi";

function Sidebar() {
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
        <button className="nav-item active">
          <FiGrid />
          <span>Dashboard</span>
        </button>

        <button className="nav-item">
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
        <button className="logout-btn">
          <FiLogOut />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
