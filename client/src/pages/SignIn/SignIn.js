import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { firebaseAuth } from "../../Firebase";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";

import google from "../../assets/google-40.png";
import glass from "../../assets/glass.png";

const SignIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(firebaseAuth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        if (userCredential) navigate("/dashboard");
      })
      .catch((err) => {
        const { code, message } = err;
        console.log(code, message);
      });
  };

  const googleSignin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(firebaseAuth, provider).then(result => {
      const user = result.user;
      if(user) navigate('/dashboard')
    });
  };

  return (
    <div className="auth-form-wrapper">
      <span className="glass-img-cont">
        <img
          src={glass}
          alt="coctail"
          className="glass-img"
        />
      </span>
      <form className="auth-form">
        <h2 className="text-purple-500 font-semibold text-xl">Sign In</h2>
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

        <button
          onClick={handleSubmit}
          className="text-white bg-purple-500 py-1 px-4 rounded-lg my-2"
        >
          Sign In
        </button>
      </form>
      <div
        onClick={googleSignin}
        className="flex flex-row items-center justify-center drop-shadow-2xl border-2 border-gray-100 p-2 rounded-lg"
      >
        <span >
          <img
            src={google}
            alt="G"
            className="g-image"
          />
        </span>
        <span className="text-gray-500 text-sm md:text-base">
          Sign in with Goggle
        </span>
      </div>
    </div>
  );
};

export default SignIn;
