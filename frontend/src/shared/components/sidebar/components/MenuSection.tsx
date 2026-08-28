import DashboardTwoToneIcon from "@mui/icons-material/DashboardTwoTone";
import AssignmentTwoToneIcon from "@mui/icons-material/AssignmentTwoTone";
import AnalyticsTwoToneIcon from "@mui/icons-material/AnalyticsTwoTone";
import CalendarMonthTwoToneIcon from "@mui/icons-material/CalendarMonthTwoTone";
import Groups3TwoToneIcon from "@mui/icons-material/Groups3TwoTone";
import { NavLink } from "react-router";
import clsx from "clsx";

function MenuSection() {
  return (
    <div className="menu-section">
      <p>Menu</p>

      <ul>
        <NavLink
          to={"dashboard"}
          className={({ isActive }) => clsx("link-col", { active: isActive })}
        >
          <div className="link-curved"></div>
          <DashboardTwoToneIcon className="icon" />
          <p>Dashboard</p>
        </NavLink>
        <NavLink
          to={"task"}
          className={({ isActive }) => clsx("link-col", { active: isActive })}
        >
          <div className="link-curved"></div>
          <AssignmentTwoToneIcon className="icon" />
          <p>Tasks</p>
        </NavLink>

        <div className="link-col">
          <AnalyticsTwoToneIcon className="icon" />
          <p>Analytics</p>
        </div>
        <div className="link-col">
          <CalendarMonthTwoToneIcon className="icon" />
          <p>Calender</p>
        </div>
        <div className="link-col">
          <Groups3TwoToneIcon className="icon" />
          <p>Teams</p>
        </div>
      </ul>
    </div>
  );
}

export default MenuSection;
