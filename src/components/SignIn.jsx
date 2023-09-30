import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth"
import { auth } from "../utility/firebaseConfig"
import { useState } from "react";

const SignInNav = () => {
  const [userDetails, setUserDetails] = useState(null);
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUserDetails(user);
      })
      .catch((err) => {
        console.error('Error: ', err.message);
      })
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUserDetails(null);
      })
      .catch((err) => {
        console.error('Error: ', err.message);
      })
  }

  return (
    <>
      {
        userDetails == null ? (
          <button onClick={handleGoogleSignIn} className="btn btn-accent" type="button">Sign in</button>
        ) : (
          <div className="hover-item relative">
            <div className="w-8 h-8 border border-color rounded-full object-cover overflow-hidden">
              <img src={userDetails.photoURL} alt="user image" />
            </div>
            <div className="hover-box invisible opacity-0 transition-all duration-300 absolute top-11 right-0 z-10 whitespace-nowrap">
              <div className="container-box">
                <div className="border-b border-color pb-1">
                  <p className="font-semibold">
                    {userDetails?.displayName}
                  </p>
                  <p className="text-sm leading-0 text-gray-500">
                    {userDetails?.email}
                  </p>
                </div>
                <button onClick={handleSignOut} className="w-full hover:bg-gray-300 dark:hover:bg-gray-700 mt-1.5 rounded-md p-0.5 pt-1 inline-block" type="button">Log out</button>
              </div>
            </div>
          </div>
        )
      }
    </>
  )
}

export default SignInNav