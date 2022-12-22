import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <nav className="h-12 bg-gradient-to-r from-purple-500 to-pink-500 flex flex-row justify-between items-center">
        <Link to="/" className="ml-4"><img className="w-20 md:w-36 lg:w-54 md:h-10" src={logo} alt='CoctailMe'/></Link>
        <div className="mr-4">
          <Link to="/signin" className="font-sans md:text-base text-xs text-white font-semibold mr-4">Sign In</Link>
          <Link to="/signup" className="font-sans md:text-base text-xs text-white font-semibold">Sign Up</Link>
        </div>
    </nav>
  )
}

export default Navbar
