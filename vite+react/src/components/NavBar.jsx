import Logo from "../assets/react.svg";
import "../components/Lists.css";

const NavBar = () => {
  return (
    <div>
      <nav>
        <img src={Logo} />
        <h1>ReactFacts</h1>
        <h2>React Course - Project One</h2>
      </nav>
    </div>
  );
};
export default NavBar;
