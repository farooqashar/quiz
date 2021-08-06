import React, { useState, useContext } from "react";
import { Questions } from "../Utils/Questions.js";
import { GameContext } from "../Utils/Context.js";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [chosenChoice, setChosenChoice] = useState("");

  const { setGame, setScore, score } = useContext(GameContext);

  const handleNextQuestion = () => {
      if (Questions[currentQuestion].answer === chosenChoice) {
            setScore(score + 1);
      } 
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleFinishQuiz = () => {
      if (Questions[currentQuestion].answer === chosenChoice) {
            setScore(score + 1);
      } 
     setGame("Terminate");
  };


  return (
    <div className="quiz">
      <h1>{Questions[currentQuestion].prompt}</h1>

      <div className="options">
        <button
          onClick={() => setChosenChoice("A")}
          className="btn btn-secondary"
        >
          {Questions[currentQuestion].optionA}
        </button>
        <button
          onClick={() => setChosenChoice("B")}
          className="btn btn-secondary"
        >
          {Questions[currentQuestion].optionB}
        </button>
        <button
          onClick={() => setChosenChoice("C")}
          className="btn btn-secondary"
        >
          {Questions[currentQuestion].optionC}
        </button>
        <button
          onClick={() => setChosenChoice("D")}
          className="btn btn-secondary"
        >
          {Questions[currentQuestion].optionD}
        </button>
      </div>
    
       {currentQuestion === Questions.length - 1 ? 
      <button onClick={handleFinishQuiz} className="btn btn-danger">
        Finish Quiz
      </button> : 
       <button onClick={handleNextQuestion} className="btn btn-primary">
        Next Question
      </button>
       }


    </div>
  );
};

export default Quiz;
