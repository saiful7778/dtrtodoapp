import { Link } from "react-router-dom";
import InputField from "../components/InputField.jsx";
import ByGoogleButton from "../components/NavigateButton.jsx";
import {
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utility/firebaseConfig.js";
import { useState, useEffect } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useRef } from "react";

const SignIn = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showPass, setShowPass] = useState(false);
  const emailRef = useRef(null);

  const handleSignIn = (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");
    const email = e.target.mail.value;
    const password = e.target.pass.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        if (user.emailVerified) {
          setSuccessMessage("Successfully logged in");
        } else {
          sendEmailVerification(user).then(() => {
            setErrorMessage("Please verify your email!");
          });
        }
      })
      .catch((err) => {
        console.error(err.message);
        setErrorMessage(err.code);
      });
  };

  const handleForgetPass = (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");
    const email = emailRef.current.value;
    if (!email) {
      setErrorMessage("Provide a valid email address");
      return;
    } else if (!/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email)) {
      setErrorMessage("Invalid email address");
      return;
    }
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setSuccessMessage("Check your mail indox");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="container-box w-full md:w-3/4 mx-auto">
      <h3 className="text-3xl font-semibold text-center">Sign In</h3>
      <form onSubmit={handleSignIn} autoComplete="off">
        <div className="flex flex-col gap-4 p-6">
          <div>
            <label className="label" htmlFor="email">
              Email
            </label>
            <input
              ref={emailRef}
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
          <label>
            <button
              className="text-sm text-gray-500"
              onClick={handleForgetPass}
            >
              Forget password
            </button>
          </label>
          {errorMessage && (
            <p className="text-red-600 text-sm">{errorMessage}</p>
          )}
          {successMessage && (
            <p className="text-green-500 text-sm">{successMessage}</p>
          )}
          <button className="btn btn-pri p-3" type="submit">
            Sign in
          </button>
        </div>
      </form>
      <div>
        <p className="leading-3 text-sm text-center mb-4">
          Don't have an account?{" "}
          <Link
            className="font-bold text-blue-500 underline"
            to="/getaccess/signup"
          >
            Sign up
          </Link>
        </p>
        <ByGoogleButton />
      </div>
    </div>
  );
};

export default SignIn;
