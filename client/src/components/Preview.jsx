import "./Preview.css";
import dashboardPreview from "../assets/dashboard-preview.png";

function Preview() {
  return (
    <section className="preview">
      <div className="preview-left">
        <img
          src={dashboardPreview}
          alt="ApplyFlow Dashboard Preview"
          className="preview-image"
        />
      </div>

      <div className="preview-right">
        <p className="preview-tag">Dashboard Preview</p>

        <h2 className="preview-title">Stay In Control Of Every Application</h2>

        <p className="preview-description">
          View all your internship applications, interview stages, deadlines and
          statistics from one beautiful dashboard designed to keep everything
          organized.
        </p>

        <ul className="preview-list">
          <li>✔ Track application status</li>

          <li>✔ View interview progress</li>

          <li>✔ Monitor deadlines</li>

          <li>✔ Analyze your success rate</li>
        </ul>
      </div>
    </section>
  );
}

export default Preview;
