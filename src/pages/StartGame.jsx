import React, { useState } from 'react';
import footballPlayers from '../components/data';
import players from '../components/WrongData' 
import './styles/StartGame.css';
import './styles/Home.css';
import { Link } from 'react-router-dom';

function StartGame() {
    const [isGlowing, setIsGlowing] = useState(false);
    const buttonClassName = `glow-on-hover ${isGlowing ? 'glow' : ''}`;
  
    const handleMouseEnter = () => {
      setIsGlowing(true);
    };
  
    const handleMouseLeave = () => {
      setIsGlowing(false);
    };
    //===================================================================

    const [index, setIndex] = useState(0);
    const currentQuestion = footballPlayers[index];
    const namePlayers = players[index];
    //===================================================================
    
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [wrongAnswers, setWrongAnswers] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    //===================================================================
    const handleNextQuestion = () => {
        // Move to the next question (player)
        const newIndex = index + 1;
        if (newIndex < footballPlayers.length) {
          setIndex(newIndex);
        } else {
            setGameOver(true)
        }
      };
    //===================================================================

      const handleAnswerClick = (selectedOption) => {
        if (selectedOption === currentQuestion.correctAnswer) {
          handleCorrectAnswer();
        } else {
          handleWrongAnswer();
        }
    
        // Move to the next question
        handleNextQuestion();
      };
    //===================================================================
    
      const handleCorrectAnswer = () => {
        setCorrectAnswers(correctAnswers + 1);
      };
    
      const handleWrongAnswer = () => {
        setWrongAnswers(wrongAnswers + 1);
      };
    
      return (
        <div className='Start-page'>
          <div className="center-container">
          {!gameOver? (<>
            <div className='results'>
              <h3>✔️{correctAnswers}</h3>
              <h3>❌{wrongAnswers}</h3>
            </div>
            <div className="card">
              <img src={currentQuestion.image} alt={currentQuestion.name} />
              <div className="container">
                <h2>
                  <b>{namePlayers.name}</b>
                </h2>
              </div>
              <div className="buttons">
                {Object.entries(currentQuestion.options).map(([key, value]) => (
                  <button
                    key={key}
                    onClick={() => handleAnswerClick(key)}
                    className={buttonClassName}
                    type="button"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    {value}
                  </button>
                ))}
              </div>
            </div>
            </>):(
                <div className="end-screen">
                    {
                    correctAnswers >= wrongAnswers ?(
                        <>
                        <h1>Congratulations you won</h1>
                        </>
                    ):(
                        <>
                        <h1>Game Over</h1>
                        </>
                    )}
                    <p>Total Correct Answers: {correctAnswers}</p>
                    <p>Total Wrong Answers: {wrongAnswers}</p>

                    <button
                    className={buttonClassName}
                    type="button"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    >
                    <Link className='Link-des' to="/">Home page</Link>
                    </button>
                </div>
            )}
          </div>
        </div>
      );
}

export default StartGame
