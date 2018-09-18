import React from "react";
import "./Nav.css";
import NavMessage from "./NavMessage";

const NavBar = () => (

<div>
<ul className="nav">
  <li className="nav-item">
    <a className="nav-link active" href="#">Clicky Game!</a>
  </li>
  <li className="nav-item">
  <NavMessage></NavMessage>
  </li>
  <li className="nav-item">
    <a className="nav-link disabled" id="score" href="#"></a>
  </li>
</ul>
</div>
);

export default NavBar;
