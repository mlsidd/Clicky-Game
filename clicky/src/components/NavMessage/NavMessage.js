import React from "react";
import "./NavMessage.css";

// Card should know what image to display, whether or not it is currently clicked, and whether or not is has
// already been clicked in current game
const NavMessage = props => (
  <div className="card">
       <a className="nav-link disabled" id="navCenterTitle" href="#">Click on an image</a>
  </div>
);

export default NavMessage;