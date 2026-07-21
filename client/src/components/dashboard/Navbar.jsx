import "./Navbar.css";

import { FiSearch, FiBell, FiChevronDown } from "react-icons/fi";

function Navbar() {
  return (
    <header className="dashboard-navbar">
      {/* Left */}

      <div className="navbar-title">
        <h2>Dashboard</h2>
        <p>Welcome back 👋</p>
      </div>

      {/* Right */}

      <div className="navbar-right">
        <div className="search-box">
          <FiSearch className="search-icon" />

          <input type="text" placeholder="Search applications..." />
        </div>

        <button className="notification-btn">
          <FiBell />
          <span className="notification-dot"></span>
        </button>

        <div className="profile-box">
          <div className="profile-avatar">R</div>

          <div className="profile-info">
            <h4>Resma</h4>
            <span>Student</span>
          </div>

          <FiChevronDown />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
