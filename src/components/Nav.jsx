import React from "react";
import navLogoImg from "../asserts/images/pvxx.png";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <Link to="/">
        <img className="nav-logo" src={navLogoImg} alt="logo" />
      </Link>
      <div className="nav-item-container">
        <Link to="/">
          <li>Home</li>
        </Link>
        {/* <Link to="/#group-section">
          <li className="imp-li group-nav">Groups</li>
        </Link>
        <Link to="/#drive-section">
          <li className="imp-li">Drive</li>
        </Link> */}
        <Link to="/community">
          <li className="imp-li">B'Days</li>
        </Link>
      </div>
    </nav>
  );
}
