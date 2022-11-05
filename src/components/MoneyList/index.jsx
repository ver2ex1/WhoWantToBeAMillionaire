import MoneyListItem from "components/MoneyListItem";

import "./style.css";

const MoneyList = ({ money, currentQuestion }) => {
  return (
    <div className="list">
      {money.map((item, index) => (
        <MoneyListItem
          key={item}
          value={item}
          active={currentQuestion === index}
          inactive={currentQuestion > index}
        />
      ))}
    </div>
  );
};

export default MoneyList;
