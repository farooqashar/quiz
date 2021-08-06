import React, { useContext } from "react";
import { GameContext } from "../Utils/Context.js";

const Menu = () => {

    const { game, setGame } = useContext(GameContext);

    return (
        <div className="menu">
            <button className="btn btn-primary" onClick={() => setGame("Quiz")}>
                Start Quiz
            </button>
        </div>
    )
};

export default Menu;