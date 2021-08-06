import './App.css';
import React, { useState, useEffect } from "react";
import Menu from "./components/Menu.js";
import Quiz from "./components/Quiz.js";
import Terminate from "./components/Terminate.js";

function App() {

  const [game, setGame] = useState("Menu");

  return (
    <div className="App">
        <h1>Quiz App</h1>

        {game === "Menu" && <Menu />}
        {game === "Quiz" && <Quiz />}
        {game === "Terminate" && <Terminate />}


    </div>
  );
}

export default App;
