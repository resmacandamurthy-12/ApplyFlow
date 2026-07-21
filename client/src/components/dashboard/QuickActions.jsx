import "./QuickActions.css";

import { FiPlusCircle, FiHeart, FiDownload } from "react-icons/fi";

function QuickActions() {
  return (
    <section className="quick-actions-card">
      <h2>Quick Actions</h2>

      <p>Access your most used features instantly.</p>

      <div className="quick-actions-grid">
        <button className="quick-action-btn">
          <FiPlusCircle />

          <span>Add Application</span>
        </button>

        <button className="quick-action-btn">
          <FiHeart />

          <span>Add Wishlist</span>
        </button>

        <button className="quick-action-btn">
          <FiDownload />

          <span>Export CSV</span>
        </button>
      </div>
    </section>
  );
}

export default QuickActions;
