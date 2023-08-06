import classes from "./PrimaryButton.module.css";

const PrimaryButton = (props) => {
  return (
    <div className={classes["btn-primary"]}>
      <button type={props.type || "button"} onClick={props.onClick}>
        {props.children}
      </button>
    </div>
  );
};

export default PrimaryButton;
