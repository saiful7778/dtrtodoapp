import PropTypes from "prop-types";

const InputField = ({
  value,
  onChange,
  name,
  type,
  placeholder,
  required,
  className,
  autoComplete,
}) => {
  return (
    <div className="relative h-11">
      <input
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        className={`input-box peer ${className ? className : ""}`}
        type={type || "text"}
        autoComplete={autoComplete}
      />
      <label className={`input-box-label ${className ? className : ""}`}>
        {placeholder}
      </label>
    </div>
  );
};

InputField.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool,
  autoComplete: PropTypes.string,
  className: PropTypes.string,
};

export default InputField;
