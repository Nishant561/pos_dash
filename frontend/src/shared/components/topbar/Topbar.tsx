import "./top-bar.scss";
import SearchIcon from "@mui/icons-material/Search";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import logo from "../../../assets/images/logo.png";
function Topbar() {
  return (
    <div className="top-bar-container">
      <div className="top-bar-input-container">
        <SearchIcon />

        <input type="text" placeholder="Search..." />
      </div>

      <div className="topbar-right">
        <MailIcon />
        <NotificationsIcon />
        <div className="topbar-right-item">
          <div className="topbar-right-item-profile">
            <img src={logo} alt="profile" />
            <div>
              <p>John Doe</p>
              <p>JohnDoe@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
