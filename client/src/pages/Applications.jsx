import "./Applications.css";

import Sidebar from "../components/dashboard/Sidebar";
import Navbar from "../components/dashboard/Navbar";
import SearchBar from "../components/applications/SearchBar";
import FilterBar from "../components/applications/FilterBar";
import ApplicationsList from "../components/applications/ApplicationsList";
function Applications() {
  return (
    <div className="applications-page">
      <Sidebar />

      <div className="applications-content">
        <Navbar title="Applications" />

        <main className="applications-body">
          {/* Search Bar */}

          <SearchBar />

          {/* Filters */}

          <FilterBar />

          {/* Application Cards */}

          <ApplicationsList />
        </main>
      </div>
    </div>
  );
}

export default Applications;
