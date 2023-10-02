import { Link } from "react-router-dom";
import InputField from "../components/InputField";
import ByGoogleButton from "../components/NavigateButton";
import { auth } from "../utility/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { useState } from "react";
import { checkPassword } from "../utility/checkInput";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const SignUp = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");
    const userName = e.target.fname.value + " " + e.target.lname.value;
    const email = e.target.mail.value;
    const password = e.target.pass.value;
    const tremsCheck = e.target.trems.checked;
    if (!tremsCheck) {
      setErrorMessage("Please read trems and conditions and check it");
      return;
    }
    if (!checkPassword(password)) {
      setErrorMessage(
        "Password must be 6 or above and uppercase, lowercase letter"
      );
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;

        updateProfile(user, {
          displayName: userName,
        })
          .then()
          .catch((err) => console.error(err));

        sendEmailVerification(user).then(() => {
          setSuccessMessage(
            "Successfully create account, varify your account!"
          );
        });
      })
      .catch((err) => {
        console.error(err.message);
        setErrorMessage(err.code);
      });
  };

  return (
    <>
      <div className="container-box w-full md:w-3/4 mx-auto">
        <h3 className="text-3xl font-semibold text-center">Sign Up</h3>
        <div className="space-y-3">
          <form className="flex flex-col gap-4 p-6" onSubmit={handleSignUp}>
            <div className="flex gap-4">
              <div>
                <label className="label" htmlFor="fname">
                  First name
                </label>
                <input
                  className="input"
                  type="text"
                  name="fname"
                  id="fname"
                  required
                />
              </div>
              <div>
                <label className="label" htmlFor="lname">
                  Last name
                </label>
                <input className="input" type="text" name="lname" id="lname" />
              </div>
            </div>
            <div>
              <label className="label" htmlFor="email">
                Email
              </label>
              <input
                className="input"
                type="email"
                name="mail"
                id="email"
                required
              />
            </div>
            <div>
              <label className="text-sm" htmlFor="pass">
                Password
              </label>
              <div className="relative">
                <input
                  className="input"
                  id="pass"
                  type={showPass ? "text" : "password"}
                  name="pass"
                  required
                />
                <button
                  onClick={() => setShowPass((prop) => !prop)}
                  className="absolute top-1/2 -translate-y-1/2 right-2 z-10"
                  type="button"
                >
                  {showPass ? (
                    <AiFillEye size={20} />
                  ) : (
                    <AiFillEyeInvisible size={20} />
                  )}
                </button>
              </div>
            </div>
            <label className="inline-flex gap-2 text-sm">
              <input type="checkbox" name="trems" />
              Trems and conditions
            </label>
            {errorMessage && (
              <p className="text-red-600 text-sm">{errorMessage}</p>
            )}
            {successMessage && (
              <p className="text-green-500 text-sm">{successMessage}</p>
            )}
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
          <div className="flex justify-center">
            <ByGoogleButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
