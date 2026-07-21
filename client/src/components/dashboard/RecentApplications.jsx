import "./RecentApplications.css";

import { FiMoreVertical, FiArrowUpRight } from "react-icons/fi";

function RecentApplications() {
  const applications = [
    {
      company: "Google",
      role: "Software Engineer Intern",
      date: "20 Jul",
      status: "Interview",
    },
    {
      company: "Microsoft",
      role: "Frontend Developer Intern",
      date: "18 Jul",
      status: "Applied",
    },
    {
      company: "Amazon",
      role: "SDE Intern",
      date: "15 Jul",
      status: "Rejected",
    },
    {
      company: "Adobe",
      role: "UI Engineer Intern",
      date: "13 Jul",
      status: "Wishlist",
    },
  ];

  return (
    <section className="recent-card">
      {/* Header */}

      <div className="recent-header">
        <div>
          <h2>Recent Applications</h2>

          <p>Your latest internship activity</p>
        </div>

        <button className="view-all-btn">
          View All
          <FiArrowUpRight />
        </button>
      </div>

      {/* List */}

      <div className="recent-list">
        {applications.map((item, index) => (
          <div className="recent-item" key={index}>
            {/* Left */}

            <div className="recent-left">
              <div className="company-avatar">{item.company.charAt(0)}</div>

              <div>
                <h3>{item.company}</h3>

                <p>{item.role}</p>
              </div>
            </div>

            {/* Right */}

            <div className="recent-right">
              <span className="application-date">{item.date}</span>

              <span
                className={`status ${item.status
                  .toLowerCase()
                  .replace(" ", "-")}`}
              >
                {item.status}
              </span>

              <button className="menu-btn">
                <FiMoreVertical />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RecentApplications;
