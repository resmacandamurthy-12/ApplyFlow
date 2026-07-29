import "./AddApplicationModal.css";
import { FiX } from "react-icons/fi";

function AddApplicationModal({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        {/* Header */}

        <div className="modal-header">
          <h2>Add New Application</h2>

          <button className="close-btn" onClick={onClose}>
            <FiX />
          </button>
        </div>

        {/* Form */}

        <form className="application-form">
          <div className="form-group">
            <label>Company Name</label>
            <input type="text" placeholder="Google" />
          </div>

          <div className="form-group">
            <label>Role</label>
            <input type="text" placeholder="Frontend Intern" />
          </div>

          <div className="form-group">
            <label>Location</label>
            <input type="text" placeholder="Bangalore" />
          </div>

          <div className="form-group">
            <label>Application Link</label>
            <input type="url" placeholder="https://careers.company.com" />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Applied Date</label>
              <input type="date" />
            </div>

            <div className="form-group">
              <label>Deadline</label>
              <input type="date" />
            </div>
          </div>

          <div className="form-group">
            <label>Status</label>

            <select>
              <option>Applied</option>
              <option>Interview</option>
              <option>Offer</option>
              <option>Rejected</option>
              <option>Wishlist</option>
            </select>
          </div>

          <div className="form-group">
            <label>Notes</label>

            <textarea rows="4" placeholder="Optional notes..."></textarea>
          </div>

          {/* Buttons */}

          <div className="modal-buttons">
            <button type="button" className="cancel-btn" onClick={onClose}>
              Cancel
            </button>

            <button type="submit" className="save-btn">
              Save Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddApplicationModal;
