import "./ApplicationsList.css";

import ApplicationCard from "./ApplicationCard";

function ApplicationsList() {
  const applications = [
    {
      company: "Google",
      role: "Frontend Intern",
      location: "Bangalore",
      appliedDate: "21 Jul",
      deadline: "10 Aug",
      status: "Applied",
    },

    {
      company: "Microsoft",
      role: "SDE Intern",
      location: "Hyderabad",
      appliedDate: "18 Jul",
      deadline: "5 Aug",
      status: "Interview",
    },

    {
      company: "Amazon",
      role: "Software Intern",
      location: "Chennai",
      appliedDate: "15 Jul",
      deadline: "2 Aug",
      status: "Wishlist",
    },

    {
      company: "Adobe",
      role: "UI Engineer",
      location: "Noida",
      appliedDate: "13 Jul",
      deadline: "31 Jul",
      status: "Rejected",
    },
  ];

  return (
    <section className="applications-grid">
      {applications.map((item, index) => (
        <ApplicationCard key={index} {...item} />
      ))}
    </section>
  );
}

export default ApplicationsList;
