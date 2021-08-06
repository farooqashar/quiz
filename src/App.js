import './App.css';
import React, { useState, useEffect, useContext } from "react";
import Menu from "./components/Menu.js";
import Quiz from "./components/Quiz.js";
import Terminate from "./components/Terminate.js";
import {GameContext} from "./Utils/Context.js";

function App() {

  const [game, setGame] = useState("Menu");

  return (
    <div className="App">
        <h1>Quiz App</h1>
        <GameContext.Provider value={{game, setGame}}>
        {game === "Menu" && <Menu />}
        {game === "Quiz" && <Quiz />}
        {game === "Terminate" && <Terminate />}
        </GameContext.Provider>

    </div>
  );
}

export default App;
