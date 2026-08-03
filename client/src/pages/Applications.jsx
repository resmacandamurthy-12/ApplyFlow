import "./Applications.css";
import { useState, useEffect } from "react";

import {
  getApplications,
  createApplication,
  updateApplication,
  deleteApplication,
} from "../services/applicationService";

import Sidebar from "../components/dashboard/Sidebar";
import Navbar from "../components/dashboard/Navbar";

import SearchBar from "../components/applications/SearchBar";
import FilterBar from "../components/applications/FilterBar";
import ApplicationsList from "../components/applications/ApplicationsList";
import AddApplicationModal from "../components/applications/AddApplicationModal";
import DeleteConfirmationModal from "../components/applications/DeleteConfirmationModal";

function Applications() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");

  const [applications, setApplications] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [editingApplication, setEditingApplication] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [applicationToDelete, setApplicationToDelete] = useState(null);

  useEffect(() => {
    fetchApplications();
  }, []);

  async function fetchApplications() {
    try {
      const response = await getApplications();
      setApplications(response.data);
    } catch (error) {
      console.error("Error fetching applications:", error);
    }
  }

  function handleEdit(application) {
    setEditingApplication(application);
    setIsEditing(true);
    setShowModal(true);
  }

  function handleDelete(application) {
    setApplicationToDelete(application);
    setShowDeleteModal(true);
  }

  async function confirmDelete() {
    try {
      await deleteApplication(applicationToDelete.id);

      setApplications((prev) =>
        prev.filter((app) => app.id !== applicationToDelete.id),
      );

      setShowDeleteModal(false);
      setApplicationToDelete(null);
    } catch (error) {
      console.error("Error deleting application:", error);
      alert("Failed to delete application");
    }
  }

  async function handleSave(applicationData) {
    try {
      if (isEditing) {
        await updateApplication(editingApplication.id, applicationData);
      } else {
        await createApplication(applicationData);
      }

      await fetchApplications();

      setShowModal(false);
      setEditingApplication(null);
      setIsEditing(false);
    } catch (error) {
      console.error("Error saving application:", error);
      alert("Failed to save application");
    }
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
            onDelete={handleDelete}
          />

          {showModal && (
            <AddApplicationModal
              onClose={() => {
                setShowModal(false);
                setEditingApplication(null);
                setIsEditing(false);
              }}
              onSave={handleSave}
              isEditing={isEditing}
              editingApplication={editingApplication}
            />
          )}

          {showDeleteModal && (
            <DeleteConfirmationModal
              application={applicationToDelete}
              onCancel={() => {
                setShowDeleteModal(false);
                setApplicationToDelete(null);
              }}
              onConfirm={confirmDelete}
            />
          )}
        </main>
      </div>
    </div>
  );
}

export default Applications;
