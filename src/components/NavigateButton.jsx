import { FcGoogle } from "react-icons/fc";

const NavigateButton = () => {
  return (
    <button
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

export default NavigateButton;
