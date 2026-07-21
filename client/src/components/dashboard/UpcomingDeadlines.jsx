import "./UpcomingDeadlines.css";

import { FiCalendar } from "react-icons/fi";

function UpcomingDeadlines() {
  const deadlines = [
    {
      company: "Google",
      role: "SWE Intern",
      days: "Tomorrow",
      date: "21 Jul",
    },
    {
      company: "Adobe",
      role: "Frontend Intern",
      days: "3 Days",
      date: "23 Jul",
    },
    {
      company: "Microsoft",
      role: "Cloud Intern",
      days: "5 Days",
      date: "25 Jul",
    },
    {
      company: "Netflix",
      role: "Backend Intern",
      days: "7 Days",
      date: "27 Jul",
    },
  ];

  return (
    <section className="deadline-card">
      {/* Header */}

      <div className="deadline-header">
        <div>
          <h2>Upcoming Deadlines</h2>
          <p>Applications closing soon</p>
        </div>

        <FiCalendar className="calendar-icon" />
      </div>

      {/* Deadline List */}

      <div className="deadline-list">
        {deadlines.map((item, index) => (
          <div className="deadline-item" key={index}>
            {/* Left */}

            <div className="deadline-left">
              <div className="deadline-logo">{item.company.charAt(0)}</div>

              <div className="deadline-info">
                <h3>{item.company}</h3>
                <p>{item.role}</p>
              </div>
            </div>

            {/* Right */}

            <div className="deadline-right">
              <span className="deadline-badge">{item.days}</span>

              <span className="deadline-date">{item.date}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}

      <div className="deadline-footer">
        <button className="deadline-btn">Open Calendar →</button>
      </div>
    </section>
  );
}

export default UpcomingDeadlines;
