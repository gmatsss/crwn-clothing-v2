import "./form-input.scss";

const Forminput = ({ label, ...otherprops }) => {
  return (
    <div className="group">
      <input className="form-input" {...otherprops} />
      {label && (
        <label
          className={
            //if the use type in the input label animation
            `${otherprops.value.length ? "shrink" : ""} form-input-label`
          }
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default Forminput;
