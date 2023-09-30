import PropTypes from "prop-types";

const InputField = ({ type, placeholder }) => {
  return (
    <div className="relative h-11">
      <input className="input-box peer" type={type || "text"} placeholder="" />
      <label className="input-box-label">{placeholder}</label>
    </div>
  );
};

InputField.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

export default InputField;
