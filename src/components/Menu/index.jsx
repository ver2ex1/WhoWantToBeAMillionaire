import MoneyList from "components/MoneyList";
import cross from "assets/cross.svg";
import "./style.css";

const Menu = ({ money, currentQuestion, isActive, handleClose }) => {
  return (
    <div className={isActive ? "menu open" : "menu"}>
      <div className="crossWrapper">
        <img src={cross} alt="close" onClick={handleClose} />
      </div>
      <MoneyList money={money} currentQuestion={currentQuestion} />
    </div>
  );
};

export default Menu;
