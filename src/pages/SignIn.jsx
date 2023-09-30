import { Link } from "react-router-dom";
import InputField from "../components/InputField.jsx";
import NavigateButton from "../components/NavigateButton.jsx";

const SignIn = () => {
  return (
    <div className="container-box w-full md:w-3/4 mx-auto">
      <h3 className="text-3xl font-semibold text-center">Sign In</h3>
      <div className="flex flex-col gap-4 p-6">
        <InputField placeholder="Email" type="email" />
        <InputField placeholder="Password" type="password" />
        <button className="btn btn-pri p-3" type="button">Sign in</button>
        <p className="leading-3 text-sm text-center">Don't  have an account? <Link className="font-bold text-blue-500 underline" to='/getaccess/signup'>Sign up</Link></p>
        <NavigateButton/>
      </div>
    </div>
  );
};

export default SignIn;
