import "../components/card.css";
// import IMG from "../components/image 12.png";
import Star from "../components/Star 1.png";

const Card = (props) => {
  return (
    <div className="all">
      <div className="card">
        <img className="card-img" src={props.img} alt="" />
        <div className="flex-container">
          <h4>{props.name}</h4>
          <img src={Star} alt="" />
          <small>5.0</small>
          <small>(6)-USA</small>
          <p>{props.number}</p>
        </div>
        <h5>Life lessons with Katie Zaferes</h5>
        <h5>From $136 / Person</h5>
      </div>
    </div>
  );
};

export default Card;
