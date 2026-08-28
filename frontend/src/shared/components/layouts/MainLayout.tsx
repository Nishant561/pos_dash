import { Outlet } from "react-router";
import Sidebar from "../sidebar/Sidebar";
import "./main-layout.scss";
function MainLayout() {
  return (
    <>
      <div className="main-layout">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
}

export default MainLayout;
