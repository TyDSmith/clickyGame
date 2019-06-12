import React from "react";
import "../game.css";


const Score = props => (
  <div className="gameScore">
    <h3 className="score">Current Score:{props.total} : Top Score : {props.topscore}</h3>
    <h3 className="status">{props.status}</h3>
  </div>
);

export default Score;