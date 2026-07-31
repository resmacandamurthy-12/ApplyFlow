import "./ApplicationsList.css";

import ApplicationCard from "./ApplicationCard";

function ApplicationsList({ applications, onEdit }) {
  if (applications.length === 0) {
    return (
      <div className="empty-state">
        <h3>No Applications Found</h3>
        <p>Try changing your search or filter.</p>
      </div>
    );
  }

  return (
    <section className="applications-grid">
      {applications.map((item) => (
        <ApplicationCard
          key={item.id}
          application={item}
          company={item.company}
          role={item.role}
          location={item.location}
          appliedDate={item.appliedDate}
          deadline={item.deadline}
          status={item.status}
          onEdit={onEdit}
        />
      ))}
    </section>
  );
}

export default ApplicationsList;
