import React from "react";
import "./imageCard.css";

// Card should know what image to display, whether or not it is currently clicked, and whether or not is has
// already been clicked in current game
const ImageCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default ImageCard;
