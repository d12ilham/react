import React from "react";
import "../Style/Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <div className="header-container">
        <a href="/">
          <img src="../Images/airbnb.png" alt="" />
        </a>
        <ul className="nav-menu">
          <li>
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
