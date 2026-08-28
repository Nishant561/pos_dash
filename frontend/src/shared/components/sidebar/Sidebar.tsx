import LogoContainer from "./components/LogoContainer";
import MenuSection from "./components/MenuSection";
import "./sidebar.scss";

function Sidebar() {
  return (
    <div className="sidebar">
      <LogoContainer />
      <MenuSection />
      <MenuSection />
      <MenuSection />
      <MenuSection />
    </div>
  );
}

export default Sidebar;
