import "./ApplicationCard.css";
import { FiMapPin, FiCalendar, FiMoreVertical, FiClock } from "react-icons/fi";

function ApplicationCard({
  application,
  company,
  role,
  location,
  appliedDate,
  applied_date,
  deadline,
  status,
  onEdit,
  onDelete,
}) {
  const displayAppliedDate = applied_date
    ? applied_date.slice(0, 10)
    : appliedDate || "";

  const displayDeadline = deadline
    ? deadline.slice
      ? deadline.slice(0, 10)
      : deadline
    : "";

  return (
    <div className="application-card">
      {/* Top */}

      <div className="application-top">
        <div className="company-logo">
          {company ? company.charAt(0).toUpperCase() : "?"}
        </div>

        <button className="menu-button" type="button">
          <FiMoreVertical />
        </button>
      </div>

      {/* Content */}

      <div className="application-content">
        <h2>{company}</h2>

        <h3>{role}</h3>

        <div className="application-details">
          <span>
            <FiMapPin />
            {location}
          </span>

          <span>
            <FiCalendar />
            Applied {displayAppliedDate}
          </span>
        </div>
      </div>

      {/* Bottom */}

      <div className="application-bottom">
        <span className={`status-badge ${status.toLowerCase()}`}>{status}</span>

        <div className="action-buttons">
          <button
            type="button"
            className="view-button"
            onClick={() => onEdit(application)}
          >
            Edit
          </button>

          <button
            type="button"
            className="delete-button"
            onClick={() => onDelete(application)}
          >
            Delete
          </button>
        </div>
      </div>

      {/* Deadline */}

      <div className="deadline">
        <FiClock />
        <span>Deadline:</span> {displayDeadline}
      </div>
    </div>
  );
}

export default ApplicationCard;
