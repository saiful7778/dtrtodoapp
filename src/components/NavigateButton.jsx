import PropTypes from 'prop-types';
import { FcGoogle } from "react-icons/fc";

const ByGoogleButton = ({onClick}) => {
  return (
    <button
    onClick={onClick}
      type="button"
      className="flex items-center border border-gray-500 w-fit"
    >
      <div className="p-2.5 border-r border-gray-500">
        <FcGoogle size={20} />
      </div>
      <p className="p-2.5 text-sm">Sign up with Google</p>
    </button>
  );
};

ByGoogleButton.propTypes = {
  onClick: PropTypes.func
}

export default ByGoogleButton;
