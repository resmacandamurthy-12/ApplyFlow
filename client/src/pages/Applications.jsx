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

  const [editingApplication, setEditingApplication] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const [applications, setApplications] = useState([
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
  ]);

  function handleEdit(application) {
    setEditingApplication(application);
    setIsEditing(true);
    setShowModal(true);
  }

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
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            onAddClick={() => {
              setEditingApplication(null);
              setIsEditing(false);
              setShowModal(true);
            }}
          />

          <FilterBar
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
          />

          <ApplicationsList
            applications={filteredApplications}
            onEdit={handleEdit}
          />

          {showModal && (
            <AddApplicationModal
              onClose={() => {
                setShowModal(false);
                setEditingApplication(null);
                setIsEditing(false);
              }}
              isEditing={isEditing}
              editingApplication={editingApplication}
              onSave={(applicationData) => {
                if (isEditing) {
                  setApplications((prev) =>
                    prev.map((app) =>
                      app.id === editingApplication.id
                        ? { ...app, ...applicationData }
                        : app,
                    ),
                  );
                } else {
                  setApplications((prev) => [
                    {
                      id: Date.now(),
                      ...applicationData,
                    },
                    ...prev,
                  ]);
                }

                setShowModal(false);
                setEditingApplication(null);
                setIsEditing(false);
              }}
            />
          )}
        </main>
      </div>
    </div>
  );
}

export default Applications;
