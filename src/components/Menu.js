import React, { useContext } from "react";
import { GameContext } from "../Utils/Context.js";

const Menu = () => {

    const { game, setGame } = useContext(GameContext);

    return (
        <div className="menu">
            <button onClick={() => setGame("Quiz")}>
                Start Quiz
            </button>
        </div>
    )
};

export default Menu;