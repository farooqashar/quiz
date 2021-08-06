import React, { useContext, useState, useEffect } from "react";
import { GameContext } from "../Utils/Context.js";

const Menu = () => {
  const { setGame, name, setName } = useContext(GameContext);

  const [userName, setUserName] = useState(name);

  useEffect(() => {
    setName(userName);
  }, [userName,setName]);

  return (
    <>
      <h3 className="subttt">Hi {name}!</h3>
      <div className="menu">
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            <strong>Enter Your Name:</strong>
          </label>
          <input
            rows="1"
            cols="47"
            className="form-control"
            onChange={(event) => setUserName(event.target.value)}
            type="text"
            placeholder="Enter Your Name Here"
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
