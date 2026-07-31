import "./ApplicationCard.css";
import { FiMapPin, FiCalendar, FiMoreVertical, FiClock } from "react-icons/fi";

function ApplicationCard({
  application,
  company,
  role,
  location,
  appliedDate,
  deadline,
  status,
  onEdit,
}) {
  return (
    <div className="application-card">
      {/* Top */}

      <div className="application-top">
        <div className="company-logo">{company.charAt(0)}</div>

        <button className="menu-button">
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
            Applied {appliedDate}
          </span>
        </div>
      </div>

      {/* Bottom */}

      <div className="application-bottom">
        <span className={`status-badge ${status.toLowerCase()}`}>{status}</span>

        <button className="view-button" onClick={() => onEdit(application)}>
          Edit
        </button>
      </div>

      {/* Deadline */}

      <div className="deadline">
        <FiClock />
        <span>Deadline:</span> {deadline}
      </div>
    </div>
  );
}

export default ApplicationCard;
