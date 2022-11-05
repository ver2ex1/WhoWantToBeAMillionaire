import { useEffect, useState } from "react";

import "./style.css";

const Answer = ({
  text,
  answer,
  letter,
  setCurrentQuestion,
  currentQuestion,
  setLose,
  isLast,
}) => {
  const [answerStatus, setAnswerStatus] = useState("");
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    if (selected) {
      setTimeout(() => {
        setSelected(false);
        setAnswerStatus(answer);
      }, 3000);
      return () => {
        clearTimeout();
      };
    }
    // eslint-disable-next-line
  }, [selected]);

  useEffect(() => {
    if (answerStatus !== "") {
      setTimeout(() => {
        if (answer && !isLast) {
          setCurrentQuestion(currentQuestion + 1);
          setAnswerStatus("");
        } else {
          setLose(true);
        }
      }, 1500);
      return () => {
        clearTimeout();
      };
    }
    // eslint-disable-next-line
  }, [answerStatus]);

  const handleClick = () => {
    setSelected(true);
  };

  const styles = () => {
    if (selected) {
      return "selected";
    }
    if (answerStatus) {
      return "correct";
    }
    if (!answerStatus && answerStatus !== "") {
      return "wrong";
    } else {
      return "defaultAnswer";
    }
  };

  return (
    <div onClick={handleClick} className={styles()}>
      <span className="letter">{letter}</span>
      {text}
    </div>
  );
};

export default Answer;
