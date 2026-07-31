import "./AddApplicationModal.css";
import { useState, useEffect } from "react";
import { FiX } from "react-icons/fi";

function AddApplicationModal({
  onClose,
  onSave,
  isEditing = false,
  editingApplication = null,
}) {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [location, setLocation] = useState("");
  const [applicationLink, setApplicationLink] = useState("");
  const [appliedDate, setAppliedDate] = useState("");
  const [deadline, setDeadline] = useState("");
  const [status, setStatus] = useState("Applied");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    if (isEditing && editingApplication) {
      setCompany(editingApplication.company ?? "");
      setRole(editingApplication.role ?? "");
      setLocation(editingApplication.location ?? "");
      setApplicationLink(editingApplication.applicationLink ?? "");
      setAppliedDate(editingApplication.appliedDate ?? "");
      setDeadline(editingApplication.deadline ?? "");
      setStatus(editingApplication.status ?? "Applied");
      setNotes(editingApplication.notes ?? "");
    } else {
      setCompany("");
      setRole("");
      setLocation("");
      setApplicationLink("");
      setAppliedDate("");
      setDeadline("");
      setStatus("Applied");
      setNotes("");
    }
  }, [isEditing, editingApplication]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!company || !role || !location) {
      alert("Please fill all required fields.");
      return;
    }

    onSave({
      company,
      role,
      location,
      applicationLink,
      appliedDate,
      deadline,
      status,
      notes,
    });
  }

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h2>{isEditing ? "Edit Application" : "Add New Application"}</h2>

          <button type="button" className="close-btn" onClick={onClose}>
            <FiX />
          </button>
        </div>

        <form className="application-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Company Name</label>
            <input
              type="text"
              placeholder="Google"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Role</label>
            <input
              type="text"
              placeholder="Frontend Intern"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Location</label>
            <input
              type="text"
              placeholder="Bangalore"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Application Link</label>
            <input
              type="url"
              placeholder="https://careers.company.com"
              value={applicationLink}
              onChange={(e) => setApplicationLink(e.target.value)}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Applied Date</label>
              <input
                type="date"
                value={appliedDate}
                onChange={(e) => setAppliedDate(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Deadline</label>
              <input
                type="date"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Status</label>

            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option>Applied</option>
              <option>Interview</option>
              <option>Offer</option>
              <option>Rejected</option>
              <option>Wishlist</option>
            </select>
          </div>

          <div className="form-group">
            <label>Notes</label>

            <textarea
              rows="4"
              placeholder="Optional notes..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>

          <div className="modal-buttons">
            <button type="button" className="cancel-btn" onClick={onClose}>
              Cancel
            </button>

            <button type="submit" className="save-btn">
              {isEditing ? "Update Application" : "Save Application"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddApplicationModal;
