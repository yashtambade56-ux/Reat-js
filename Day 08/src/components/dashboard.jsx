import { Link, Outlet } from "react-router-dom"
import './dashboard.css'

export default function DashboardLayout() {
  return (
    <div className="dashboardWrapper">
      <div className="dashboardTitle">
        <h1>Dashboard</h1>
      </div>

      <div className="contentBox">
        <Outlet />
      </div>

      <div className="dashboardFooter">
        <nav className="footerNav">
          <Link to="/dashboard/profile">Profile</Link>
          <Link to="/dashboard/settings">Settings</Link>
        </nav>
      </div>
    </div>
  );
}
