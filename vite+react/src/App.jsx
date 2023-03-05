import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Texts from "./components/texts";
import Card from "./components/Card";
import "./components/card.css";

const App = () => {
  return (
    <div>
      <NavBar />
      <Main />
      <Texts />
      <div className="myDiv">
        <Card
          name="Ejiro"
          img="../components/image.png"
          number="08067564536"
          class="ss3"
        />
        <Card
          name="Mike"
          img="../components/image.png"
          number="08067564536"
          class="ss3"
        />
        <Card
          name="Dave"
          img="../components/image.png"
          number="08067674536"
          class="s23"
        />
      </div>
    </div>
  );
};

export default App;
