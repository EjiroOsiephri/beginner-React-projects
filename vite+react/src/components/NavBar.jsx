// import Logo from "../assets/react.svg";
// import "../components/Lists.css";

// const NavBar = () => {
//   return (
//     <div>
//       <nav>
//         <img src={Logo} />
//         <h1>ReactFacts</h1>
//         <h2>React Course - Project One</h2>
//       </nav>
//     </div>
//   );
// };
// export default NavBar;
import "../components/navbar.css";
import Logo from "./airbnb 1.png";
import Main from "./Main";

const NavBar = () => {
  return (
    <div>
      <div className="nav-div">
        <nav className="navbar">
          <img src={Logo} alt="" />
        </nav>
      </div>
    </div>
  );
};
export default NavBar;
