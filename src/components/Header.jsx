import React from "react";
import logoImg from "../asserts/images/group/main.jpg";
import editImg from "../asserts/images/edit.jpg";

export default function Header() {
  return (
    <header id="header" className="section">
      <div id="header-section">
        <img id="logo" src={logoImg} alt="logo" />
        <h1 className="heading">&lt;&#123;PVX&#125;&gt; COMMUNITY ❤️</h1>
        <p className="subheading">Created by You, 03/07/16</p>
        <img id="edit-icon" src={editImg} alt="edit" />
      </div>
    </header>
  );
}
