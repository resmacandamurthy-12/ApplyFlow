import "./SearchBar.css";

import { FiSearch, FiPlus } from "react-icons/fi";

function SearchBar() {
  return (
    <section className="search-section">
      <div className="search-box-app">
        <FiSearch />

        <input type="text" placeholder="Search company, role or status..." />
      </div>

      <button className="add-btn">
        <FiPlus />
        Add Application
      </button>
    </section>
  );
}

export default SearchBar;
