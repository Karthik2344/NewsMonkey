import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link className="navbar-brand" to="/">
        NewsMonkey
      </Link>
      
      <div className="collapse navbar-collapse" id="navbarMenu">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/business">
              Business
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/entertainment">
              Entertainment
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/general">
              General
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/health">
              Health
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/science">
              Science
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/sports">
              Sports
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/technology">
              Technology
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
