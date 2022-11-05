import Logo from "components/Logo";
import Button from "components/Button";
import { useNavigate } from "react-router-dom";
import "./style.css";

const GameOver = ({ total }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/", { replace: true });
  };
  return (
    <div className="wrapper">
      <div className="content">
        <div className="imageWrapper">
          <Logo />
        </div>
        <div className="title">
          <div className="titleText">
            <span>Total score:</span>
            <h1>{total} earned</h1>
          </div>
          <Button onClick={handleClick}>Try again</Button>
        </div>
      </div>
    </div>
  );
};

export default GameOver;
