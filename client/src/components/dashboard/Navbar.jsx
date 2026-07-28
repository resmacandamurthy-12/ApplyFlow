import "./Navbar.css";

import { FiSearch, FiBell, FiChevronDown } from "react-icons/fi";

function Navbar({ title }) {
  return (
    <header className="dashboard-navbar">
      {/* Left */}

      <div className="navbar-title">
        <h2>{title}</h2>
      </div>

      {/* Right */}

      <div className="navbar-right">
        <div className="search-box">
          <FiSearch />
          <input type="text" placeholder="Search applications..." />
        </div>

        <button className="icon-btn">
          <FiBell />
          <span className="notification-dot"></span>
        </button>

        <div className="profile-card">
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
