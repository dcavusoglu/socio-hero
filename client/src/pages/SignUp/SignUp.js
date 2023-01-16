import React, { useState } from "react";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { firebaseAuth } from "../../Firebase";
import glass from "../../assets/glass.png";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

const onSubmit = async (e) => {
  e.preventDefault()

  await createUserWithEmailAndPassword(firebaseAuth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        updateProfile(user, {
          displayName: userName,
        }).then(function() {
            console.log(firebaseAuth.currentUser.displayName);
        })
        if(user) {
          navigate('/dashboard')
        } 
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
    });
  }

  return (
    <div className="auth-form-wrapper">
      <span className="glass-img-cont">
        <img
          src={glass}
          alt="coctail"
          className="glass-img"
        />
      </span>
      <form
        className="auth-form"
      >
        <div className="flex flex-col items-center w-1/2">
          <h2 className="text-purple-500 font-semibold text-xl">Sign Up</h2>
          <input
            type="userName"
            id="userName"
            name="userName"
            value={userName}
            placeholder="userName"
            required
            onChange={(e) => setUserName(e.target.value)}
            className="border-2 rounded-lg border-purple-500/[.55] px-2 h-8 mt-4 w-64"
          />
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            placeholder="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 rounded-lg border-purple-500/[.55] px-2 h-8 mt-4 w-64"
          />
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            placeholder="password"
            required
            onChange={(e) => setPassword(e.target.value)}
            className="border-2 rounded-lg border-purple-500/[.55] px-2 h-8 mt-4 w-64"
          />

            <button onClick={onSubmit} className="text-white  bg-purple-500 py-1 px-4 rounded-lg my-2">
              Sign Up
            </button>

        </div>
      </form>
    </div>
  );
};

export default SignUp;
