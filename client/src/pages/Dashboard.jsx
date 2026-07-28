import "./Dashboard.css";

import Sidebar from "../components/dashboard/Sidebar";
import Navbar from "../components/dashboard/Navbar";
import WelcomeCard from "../components/dashboard/WelcomeCard";
import StatsCard from "../components/dashboard/StatsCard";
import RecentApplications from "../components/dashboard/RecentApplications";
import UpcomingDeadlines from "../components/dashboard/UpcomingDeadlines";
import QuickActions from "../components/dashboard/QuickActions";
import { FiBriefcase, FiHeart, FiClock, FiAward } from "react-icons/fi";

function Dashboard() {
  return (
    <div className="dashboard">
      <Sidebar />

      <div className="dashboard-content">
        <Navbar title="Dashboard" />

        <main className="dashboard-body">
          <WelcomeCard />
          <div className="stats-grid">
            <StatsCard
              title="Applications"
              value="24"
              subtitle="Total applications"
              icon={<FiBriefcase />}
            />

            <StatsCard
              title="Wishlist"
              value="8"
              subtitle="Saved companies"
              icon={<FiHeart />}
            />

            <StatsCard
              title="Pending"
              value="12"
              subtitle="Awaiting response"
              icon={<FiClock />}
            />

            <StatsCard
              title="Offers"
              value="2"
              subtitle="Congratulations!"
              icon={<FiAward />}
            />
          </div>
          <div className="dashboard-grid">
            <RecentApplications />

            <UpcomingDeadlines />
          </div>
          <QuickActions />
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
