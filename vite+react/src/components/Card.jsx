import "../components/card.css";
import IMG from "../components/image 12.png";
import Star from "../components/Star 1.png";

const Card = () => {
  return (
    <div className="card">
      <img className="card-img" src={IMG} alt="" />
      <div className="flex-container">
        <img src={Star} alt="" />
        <small>5.0</small>
        <small>(6)-USA</small>
      </div>
      <h5>Life lessons with Katie Zaferes</h5>
      <h5>From $136 / Person</h5>
    </div>
  );
};

export default Card;
