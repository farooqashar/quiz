import React, { useContext } from "react";
import { GameContext } from "../Utils/Context.js";
import { Questions } from "../Utils/Questions.js";

const Terminate = () => {

    const { score } = useContext(GameContext);

    return (
        <div className="terminate">
            <h1> Quiz Completed!</h1>
            <h3>{score} / {Questions.length}</h3>
        </div>
    )
};

export default Terminate;