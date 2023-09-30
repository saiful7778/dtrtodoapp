import PropTypes from "prop-types";

const InputField = ({ value, onChange, type, placeholder }) => {
  return (
    <div className="relative h-11">
      <input
        value={value}
        onChange={onChange}
        className="input-box peer"
        type={type || "text"}
        placeholder=""
      />
      <label className="input-box-label">{placeholder}</label>
    </div>
  );
};

InputField.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

export default InputField;
