import { useEffect, useState } from "react";

import getJSONData from "utils/getJSONData";
import useWindowSize from "utils/useWindowSize";

import GameOver from "pages/GameOver";
import Loader from "components/Loader";
import MoneyList from "components/MoneyList";
import AnswersList from "components/AnswersList";
import burger from "assets/burger.svg";
import Menu from "components/Menu";

import "./style.css";

const Game = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [lose, setLose] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [money, setMoney] = useState([]);
  const [letters, setLetters] = useState([]);

  useEffect(() => {
    getJSONData(setMoney, ["money"]);
    getJSONData(setQuestions, ["questions"]);
    getJSONData(setLetters, ["letters"]);
  }, []);

  const { width } = useWindowSize();

  const total = money[currentQuestion];

  const handleOpenMenu = () => {
    setIsMenuActive(true);
  };

  const handleCloseMenu = () => {
    setIsMenuActive(false);
  };

  if (!money.length || !questions.length || !letters.length) {
    return <Loader />;
  }
  return !lose ? (
    <>
      <div className="wrapper">
        <div className="gameContent">
          {!isMenuActive && width <= 768 && (
            <div className="burger" onClick={handleOpenMenu}>
              <img src={burger} alt="menu" />
            </div>
          )}
          <h1>{questions[currentQuestion].text}</h1>
          <AnswersList
            setCurrentQuestion={setCurrentQuestion}
            currentQuestion={currentQuestion}
            setLose={setLose}
            answers={questions[currentQuestion].answers}
            letters={letters}
            isLast={currentQuestion === questions.length - 1}
          />
        </div>
        {width > 768 && (
          <MoneyList money={money} currentQuestion={currentQuestion} />
        )}
      </div>
      <Menu
        money={money}
        currentQuestion={currentQuestion}
        isActive={isMenuActive}
        handleClose={handleCloseMenu}
      />
    </>
  ) : (
    <GameOver total={total} />
  );
};

export default Game;
