import Logo from "components/Logo";
import Button from "components/Button";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Start = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/game", { replace: true });
  };
  return (
    <div className="wrapper">
      <div className="content">
        <div className="imageWrapper">
          <Logo />
        </div>
        <div className="title">
          <span>Who wants to be a millionaire?</span>
          <Button onClick={handleClick}>Start</Button>
        </div>
      </div>
    </div>
  );
};

export default Start;
