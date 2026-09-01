import { Outlet } from "react-router";
import Sidebar from "../sidebar/Sidebar";
import Topbar from "../topbar/Topbar";
import "./main-layout.scss";
function MainLayout() {
  return (
    <>
      <div className="main-layout">
        <div className="main-content">
          <Sidebar />
          <div className="hero-section">
            <Topbar />
            <div>

            <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainLayout;
