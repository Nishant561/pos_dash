import logo from "../../../../assets/images/logo.png";

function LogoContainer() {
  return (
    <div className="logo-container">
      <div>
        <img src={logo} alt="logo" />
        <h4>Dozens</h4>
      </div>
    </div>
  );
}

export default LogoContainer;
