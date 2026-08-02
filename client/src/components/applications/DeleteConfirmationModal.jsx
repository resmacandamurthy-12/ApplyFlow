import "./DeleteConfirmationModal.css";
import { FiTrash2 } from "react-icons/fi";

function DeleteConfirmationModal({ application, onCancel, onConfirm }) {
  return (
    <div className="delete-overlay">
      <div className="delete-modal">
        <div className="delete-icon">
          <FiTrash2 />
        </div>

        <h2>Delete Application?</h2>

        <p>
          Are you sure you want to delete your application for
          <strong> {application.company}</strong>?
        </p>

        <div className="delete-buttons">
          <button className="cancel-delete-btn" onClick={onCancel}>
            Cancel
          </button>

          <button className="confirm-delete-btn" onClick={onConfirm}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteConfirmationModal;
