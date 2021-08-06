import React, { useContext, useState, useEffect } from "react";
import { GameContext } from "../Utils/Context.js";

const Menu = () => {
  const { setGame, name, setName } = useContext(GameContext);

  const [userName, setUserName] = useState(name);

  useEffect(() => {
    setName(userName);
  }, [userName]);

  return (
    <>
      <h1>Hi {name} </h1>
      <div className="menu">
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Enter Your Name:
          </label>
          <input
            rows="1"
            cols="47"
            required
            class="form-control"
            onChange={(event) => setUserName(event.target.value)}
            type="text"
            placeholder="Enter Your Name"
          ></input>
        </div>
        <button className="btn btn-primary" onClick={() => setGame("Quiz")}>
          Start Quiz
        </button>
      </div>
    </>
  );
};

export default Menu;
