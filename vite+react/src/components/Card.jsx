import "../components/card.css";
// import IMG from "../components/image 12.png";
import Star from "../components/Star 1.png";

const Card = (props) => {
  // const openSpots = 0;
  // const trueValue = openSpots ? (display = "block") : (display = "none");
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  } else {
  }
  return (
    <div className="all">
      <div className="card">
        {badgeText && <div className="card--badge">{badgeText}</div>}
        <img className="card-img" src={`/${props.img}`} alt="" />
        <div className="flex-container">
          <h4>{props.name}</h4>
          <h4>{props.title}</h4>
          <img src={Star} alt="" />
          <small>5.0</small>
          <small>
            (6)-<span>{props.location}</span>
          </small>
          <p>{props.number}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
