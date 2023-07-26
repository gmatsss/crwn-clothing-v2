import "./button.scss";

const button_class = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, buttontype, ...otherprops }) => {
  return (
    <button
      className={`button-container ${button_class[buttontype]}`}
      {...otherprops}
    >
      {children}
    </button>
  );
};

export default Button;
