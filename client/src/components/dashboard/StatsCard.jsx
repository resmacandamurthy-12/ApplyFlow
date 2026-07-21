import "./StatsCard.css";

import { FiArrowUpRight } from "react-icons/fi";

function StatsCard({ title, value, subtitle, icon, color = "#A8553A" }) {
  return (
    <div className="stats-card">
      <div className="stats-top">
        <div className="stats-icon" style={{ background: color }}>
          {icon}
        </div>

        <FiArrowUpRight className="stats-arrow" />
      </div>

      <div className="stats-content">
        <span className="stats-title">{title}</span>

        <h2>{value}</h2>

        <p>{subtitle}</p>
      </div>
    </div>
  );
}

export default StatsCard;
