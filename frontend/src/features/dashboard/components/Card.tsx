import CallMadeIcon from "@mui/icons-material/CallMade";
import "../dashboard-page.scss";
function Card() {
  return (
    <div className="cards">
      <div className="card-heading">
        <h5>Card Heading</h5>
        <CallMadeIcon className="icon" />
      </div>
      <div>
        <h3>24</h3>
      </div>
      <div>
        <p>Card Description</p>
      </div>
    </div>
  );
}

export default Card;
