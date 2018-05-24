import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import "../Navbar/Navbar.css"
import SignUp from "../SignUp";
import SignIn from "../SignIn";
import NavSearch from "../NavSearch";
import SignUpLogIn from "../SignUpLogIn/SignUpLogIn"



// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <nav id="nav" className="navbar navbar-light navbar-expand-lg animated fadeIn">
    {/* <SignUp />

    <SignIn /> */}

    <Link className="navbar-brand" to="/">
      <Logo />
    </Link>
    <div>
      <ul className="navbar-nav">

        <li
          className="nav-item"
        >
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li
          className="nav-item"
        >
          <Link to="/About" className="nav-link">
            About
          </Link>
        </li>
        <li
          className="nav-item"
        >
          <Link to="/Contact" className="nav-link">
            Contact
          </Link>
        </li>
        <li
          className="nav-item"
        >
          <Link to="/Search" className="nav-link">
            Search Locations
          </Link>
        </li>
        <li
          className="nav-item"
        >
        <SignUpLogIn className="signup-login"/>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
