import "./FilterBar.css";

function FilterBar({ selectedFilter, setSelectedFilter }) {
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
          className={`filter-btn ${selectedFilter === filter ? "active" : ""}`}
          onClick={() => setSelectedFilter(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;
