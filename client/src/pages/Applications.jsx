import "./Applications.css";
import { useState } from "react";

import AddApplicationModal from "../components/applications/AddApplicationModal";

import Sidebar from "../components/dashboard/Sidebar";
import Navbar from "../components/dashboard/Navbar";
import SearchBar from "../components/applications/SearchBar";
import FilterBar from "../components/applications/FilterBar";
import ApplicationsList from "../components/applications/ApplicationsList";

function Applications() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const applications = [
    {
      id: 1,
      company: "Google",
      role: "Frontend Intern",
      location: "Bangalore",
      appliedDate: "21 Jul",
      deadline: "30 Jul",
      status: "Applied",
    },
    {
      id: 2,
      company: "Microsoft",
      role: "SDE Intern",
      location: "Hyderabad",
      appliedDate: "18 Jul",
      deadline: "2 Aug",
      status: "Interview",
    },
    {
      id: 3,
      company: "Amazon",
      role: "Software Intern",
      location: "Chennai",
      appliedDate: "15 Jul",
      deadline: "29 Jul",
      status: "Wishlist",
    },
    {
      id: 4,
      company: "Adobe",
      role: "UI Engineer",
      location: "Noida",
      appliedDate: "13 Jul",
      deadline: "31 Jul",
      status: "Rejected",
    },
  ];

  const filteredApplications = applications.filter((app) => {
    const matchesSearch =
      app.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.role.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter =
      selectedFilter === "All" || app.status === selectedFilter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="applications-page">
      <Sidebar />

      <div className="applications-content">
        <Navbar title="Applications" />

        <main className="applications-body">
          {/* Page Header */}

          {/* Search */}

          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            onAddClick={() => setShowModal(true)}
          />

          {/* Filters */}

          <FilterBar
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
          />

          {/* Applications */}

          <ApplicationsList applications={filteredApplications} />
          {showModal && (
            <AddApplicationModal onClose={() => setShowModal(false)} />
          )}
        </main>
      </div>
    </div>
  );
}

export default Applications;
