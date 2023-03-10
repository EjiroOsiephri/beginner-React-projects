import { useState } from "react";
import reactLogo from "./assets/react.svg";
import NavBar from "./components/NavBar";
import Meme from "./components/Meme";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Meme />
    </div>
  );
}

export default App;
