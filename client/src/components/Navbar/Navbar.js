import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";


const Navbar = () => {
  return (
    <nav className="navbar-container">
        <Link to="/" className="link-text">Socio Hero</Link>
        <Link to="/signin" className="link-text">Sign In</Link>
        <Link to="/signup" className="link-text">Sign Up</Link>
    </nav>
  )
}

export default Navbar
