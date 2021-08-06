import React, { useContext } from "react";
import { GameContext } from "../Utils/Context.js";
import { Questions } from "../Utils/Questions.js";

const Terminate = () => {

    const { score, setScore, setGame } = useContext(GameContext);

    const reset = () => {
        setScore(0);
        setGame("Menu");
    };

    return (
        <div className="terminate">
            <h1> Quiz Completed!</h1>
            <h3>{score} / {Questions.length}</h3>
            <button onClick={reset}className="btn btn-primary">Reset</button>


             <a href="mailto:someone@yoursite.com" className="btn btn-primary">
                Share This Quiz
            </a>
        </div>
    )
};

export default Terminate;