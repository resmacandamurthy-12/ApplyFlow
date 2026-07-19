import "./Features.css";
import FeatureCard from "./FeatureCard";
import {
  FileText,
  Calendar,
  Heart,
  ChartColumn,
  Bell,
  Download,
} from "lucide-react";

function Features() {
  return (
    <section id="features" className="features">
      <h2 className="features-heading">
        Everything You Need To Stay Organized
      </h2>

      <p className="features-subheading">
        ApplyFlow helps students manage every internship application from start
        to finish.
      </p>

      <div className="features-grid">
        <FeatureCard
          icon={<FileText size={40} color="#A8553A" />}
          title="Track Applications"
          description="Keep every internship application organized in one place with complete details."
        />

        <FeatureCard
          icon={<Calendar size={40} color="#A8553A" />}
          title="Interview Timeline"
          description="Monitor every stage from application to offer with an easy-to-follow timeline."
        />

        <FeatureCard
          icon={<Heart size={40} color="#A8553A" />}
          title="Wishlist Companies"
          description="Save dream companies and apply whenever you're ready."
        />

        <FeatureCard
          icon={<ChartColumn size={40} color="#A8553A" />}
          title="Analytics Dashboard"
          description="Visualize applications, offers, rejections and progress using beautiful statistics."
        />

        <FeatureCard
          icon={<Bell size={40} color="#A8553A" />}
          title="Deadline Reminders"
          description="Never miss an internship deadline or interview date again."
        />

        <FeatureCard
          icon={<Download size={40} color="#A8553A" />}
          title="Export Data"
          description="Download your internship records anytime in CSV format."
        />
      </div>
    </section>
  );
}

export default Features;
