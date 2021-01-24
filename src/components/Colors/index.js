import React, { useState } from "react";

import "./style.css";

const colors = [
  "white",
  "dark-pink",
  "green",
  "light-blue",
  "purple",
  "dark-orange",
];

function Colors(props) {
  const taskData = props.data;

  const handleColorClick = (e, color) => {
    console.log(color);
  };

  const checColor = (color) => {
    if (taskData && taskData.color === color) {
      return "color-active";
    }
    return "color";
  };

  const addClassColor = (color) => {
    return colors[color];
  };

  return (
    <div className="colors">
      <span className="color white"></span>
      <span className="color dark-pink"></span>
      <span className="color purple"></span>
      <span className="color green"></span>
      <span className="color light-blue"></span>
      <span className="color dark-orange"></span>
    </div>
  );
}

export default Colors;
