import React, { useContext } from "react";
import { GameContext } from "../Utils/Context.js";
import { Questions } from "../Utils/Questions.js";

const Terminate = () => {

    const { score, setScore, setGame, name } = useContext(GameContext);

    const reset = () => {
        setScore(0);
        setGame("Menu");
    };

    return (
        <div className="terminate">
            <h3 className="subttt"> Quiz Completed! </h3>
            <i><h3 className="eachl"> {name}, awesome job taking on the challenge!</h3></i>
            <h3>Your Score: <strong className="eachl">{score} / {Questions.length}</strong></h3>
            <button onClick={reset}className="btn btn-danger">Try Again</button>

            <br />
             <a href="mailto:yourfriend@example.com" className="btn btn-secondary">
                Share This Quiz 😃
            </a>
        </div>
    )
};

export default Terminate;