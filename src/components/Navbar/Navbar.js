import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar-container">
        <Link to="/" className="link-text">Socio Hero</Link>
        <Link to="/signin" className="link-text">Sign In</Link>
    </nav>
  )
}

export default Navbar
