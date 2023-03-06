import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Texts from "./components/texts";
import Card from "./components/Card";
import "./components/card.css";
import Data from "./components/data";

const App = () => {
  const newData = Data.map((dataValue) => {
    return dataValue;
  });
  console.log(newData);
  return (
    <div>
      <NavBar />
      <Main />
      <Texts />

      <div className="myDiv">
        <Card
          name={newData[0].name}
          title={newData[0].title}
          img={newData[0].coverImg}
          number={newData[0].description}
          location={newData[0].location}
          openSpots={newData[0].openSpots}
        />
        <Card
          name={newData[1].name}
          title={newData[1].title}
          img={newData[1].coverImg}
          number={newData[1].description}
          location={newData[1].location}
          openSpots={newData[1].openSpots}
        />
        <Card
          name={newData[2].name}
          title={newData[2].title}
          img={newData[2].coverImg}
          number={newData[2].description}
          location={newData[2].location}
          openSpots={newData[2].openSpots}
        />
      </div>
    </div>
  );
};

export default App;
