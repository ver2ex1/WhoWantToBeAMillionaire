import "./style.css";

const MoneyListItem = ({ value, inactive, active, ...props }) => {
  const styles = () => {
    if (inactive) {
      return "inactive";
    }
    if (active) {
      return "active";
    } else {
      return "default";
    }
  };
  return (
    <div className={styles()} {...props}>
      <span>{value}</span>
    </div>
  );
};

export default MoneyListItem;
