import React from "react";
import "./Jumbotron.css";

const Jumbotron = () => (

<div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4" id="jumbotronTitle">Begin Game!</h1>
    <p className="lead" id="jumbotronDirections">Click on an image to start the game.  After images are moved around, click on a new image to earn a point.  If you never click on the same image again you win the game!  If you click on the same image, game over!</p>
  </div>
</div>
);

export default Jumbotron;