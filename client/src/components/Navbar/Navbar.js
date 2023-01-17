import React, { useContext } from "react";
import { Link } from "react-router-dom";
// import { firebaseAuth } from "../../Firebase";
// import { onAuthStateChanged } from "@firebase/auth";

import "./Navbar.css";
import logo from "../../assets/logo.png";
import { UserContext } from "../../App";

const Navbar = () => {
  const { currentUser, userName } = useContext(UserContext);

  return (
    <nav className="h-12 bg-gradient-to-r from-purple-500 to-pink-500 flex flex-row justify-between items-center">
      <Link
        to="/"
        className="ml-4"
      >
        <img
          className="w-20 md:w-36 lg:w-54 md:h-10"
          src={logo}
          alt="CoctailMe"
        />
      </Link>
      {currentUser ? (
        <div className="mr-2">
          <span className="text-xs text-white mr-1">{`Hello, ${userName}!`}</span>
          {/* <span className="text-xs text-white mr-1">{`Hello, ${userName.split(' ')[0]}!`}</span> */}
          <Link
            to="/dashboard"
            className="font-sans md:text-base text-xs text-white font-semibold mr-4"
          >
            Dashboard
          </Link>
        </div>
      ) : (
        <div className="mr-4">
          <Link
            to="/signin"
            className="font-sans md:text-base text-xs text-white font-semibold mr-4"
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="font-sans md:text-base text-xs text-white font-semibold"
          >
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
