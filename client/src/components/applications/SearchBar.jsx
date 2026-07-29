import "./SearchBar.css";

import { FiSearch, FiPlus } from "react-icons/fi";

function SearchBar({ searchTerm, setSearchTerm, onAddClick }) {
  return (
    <section className="search-section">
      {/* Search Box */}

      <div className="search-box-app">
        <FiSearch />

        <input
          type="text"
          placeholder="Search company, role or status..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Add Button */}

      <button
        className="add-btn"
        onClick={() => {
          console.log("Add button clicked");
          onAddClick();
        }}
      >
        <FiPlus />
        <span>Add Application</span>
      </button>
    </section>
  );
}

export default SearchBar;
