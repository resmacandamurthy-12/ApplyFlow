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
        <Navbar />

        <main className="applications-body">
          <div className="applications-header">
            <div>
              <h1>Applications</h1>
              <p>
                Manage, organize and track every internship application in one
                place.
              </p>
            </div>
          </div>

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
