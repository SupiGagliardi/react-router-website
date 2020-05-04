import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <div className="wrapper">
        <div className="logo-link">
          <div className="nav-logo">
            <p>
              <strong>Jake</strong>&<strong>Elwood</strong>
            </p>
          </div>
          <ul className="nav-link-list">
            <li>
              <Link exact to="/">
                home
              </Link>
            </li>
            <li>
              <Link to="/about">about me</Link>
            </li>
            <li>
              <Link to="/contact">contact us</Link>
            </li>
          </ul>
        </div>
        <img
          src="/assets/ham.svg"
          className="ham"
          alt="Hamburger menu"
          height="35px"
        />
      </div>
    </nav>
  );
};

export default Navbar;
