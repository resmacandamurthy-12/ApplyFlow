import "./About.css";
//import aboutImage from "../assets/about-illustration.png";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-left">
        <p className="about-tag">About ApplyFlow</p>

        <h2 className="about-title">
          Built To Simplify Every Internship Journey
        </h2>

        <p className="about-description">
          Managing internship applications can quickly become overwhelming.
          Students often rely on spreadsheets, notes, or scattered documents to
          keep track of applications, interviews, deadlines and offers.
        </p>

        <p className="about-description">
          ApplyFlow brings everything together into one clean and intuitive
          dashboard, helping you stay organized and focus on what truly
          matters—landing your dream internship.
        </p>

        <div className="about-highlights">
          <div className="highlight-card">✓ Clean & Minimal</div>

          <div className="highlight-card">✓ Student Friendly</div>

          <div className="highlight-card">✓ Track Every Opportunity</div>

          <div className="highlight-card">✓ Organized Dashboard</div>
        </div>
      </div>

      <div className="about-right">About Image</div>
    </section>
  );
}

export default About;
