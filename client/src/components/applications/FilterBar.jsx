import "./FilterBar.css";
import { useState } from "react";

function FilterBar() {
  const [active, setActive] = useState("All");

  const filters = [
    "All",
    "Applied",
    "Interview",
    "Offer",
    "Rejected",
    "Wishlist",
  ];

  return (
    <div className="filter-bar">
      {filters.map((filter) => (
        <button
          key={filter}
          className={`filter-btn ${active === filter ? "active" : ""}`}
          onClick={() => setActive(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;
