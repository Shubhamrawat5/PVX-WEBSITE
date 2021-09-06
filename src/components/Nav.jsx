import React from "react";
import navLogoImg from "../asserts/images/pvxx.png";

export default function Nav() {
  return (
    <nav>
      <a href="#header">
        <img className="nav-logo" src={navLogoImg} alt="logo" />
      </a>
      <div className="nav-item-container">
        <a href="#header">
          <li>Home</li>
        </a>
        <a href="#group-section">
          <li className="imp-li group-nav">Groups</li>
        </a>
        <a href="#drive-section">
          <li className="imp-li">Drive</li>
        </a>
        <a href="Community-Bday/community-bday.html">
          <li className="imp-li">B'days</li>
        </a>
        {/* <div className="theme-mode-container">
          <img className="theme-mode" src="images/moon.svg" alt="mode" />
        </div> */}
      </div>
    </nav>
  );
}
