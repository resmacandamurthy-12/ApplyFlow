import "./ApplicationsList.css";

import ApplicationCard from "./ApplicationCard";

function ApplicationsList({ applications, onEdit, onDelete }) {
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
          {...item}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </section>
  );
}

export default ApplicationsList;
