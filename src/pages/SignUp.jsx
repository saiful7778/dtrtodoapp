import { Link } from "react-router-dom";
import InputField from "../components/InputField";
import NavigateButton from "../components/NavigateButton";
import useInputState from "../hooks/useInputState";

const SignUp = () => {
  const [firstName, setFirstName] = useInputState("");
  const [lastName, setLastName] = useInputState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log(firstName, lastName);
  };

  return (
    <>
      <div className="container-box w-full md:w-3/4 mx-auto">
        <h3 className="text-3xl font-semibold text-center">Sign Up</h3>
        <div className="space-y-3">
          <form className="flex flex-col gap-4 p-6" onSubmit={handleSignUp}>
            <div className="flex gap-4">
              <InputField
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
                type="text"
              />
              <InputField
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
                type="text"
              />
            </div>
            <InputField placeholder="Email" type="email" />
            <InputField placeholder="Password" type="password" />
            <button className="btn btn-pri p-3" type="submit">
              Sign up
            </button>
          </form>
          <p className="leading-3 text-sm text-center">
            Do you have an account?{" "}
            <Link
              className="font-bold text-blue-500 underline"
              to="/getaccess/signin"
            >
              Sign in
            </Link>
          </p>
          <NavigateButton />
        </div>
      </div>
    </>
  );
};

export default SignUp;
