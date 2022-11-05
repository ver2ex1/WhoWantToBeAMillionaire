import Answer from "components/Answer";

import "./style.css";

const AnswersList = ({
  answers,
  setCurrentQuestion,
  currentQuestion,
  setLose,
  letters,
  isLast,
}) => {
  return (
    <div className="answerListWrapper">
      {answers?.map((answer, index) => (
        <Answer
          key={answer.text}
          answer={answer.correct}
          text={answer.text}
          letter={letters[index]}
          setCurrentQuestion={setCurrentQuestion}
          currentQuestion={currentQuestion}
          setLose={setLose}
          isLast={isLast}
        />
      ))}
    </div>
  );
};

export default AnswersList;
