import "./style.css";

const Button = ({ ...props }) => {
  return <button {...props} className="button" />;
};

export default Button;
