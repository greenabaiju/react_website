import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">React</h2>

      <div className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/about">About React</Link>
        </li>

        <li>
          <Link to="/core">Core Concepts</Link>
        </li>

        <li>
          <Link to="/working">How React Works</Link>
        </li>

        
      </div>

      <button className="nav-button">Get Started</button>
    </nav>
  );
};

export default Navbar;
