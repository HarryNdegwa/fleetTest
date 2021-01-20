import React from "react";
import { ImCheckboxChecked } from "react-icons/im";
import "./style.css";

function Task(props) {
  return (
    <div className="task">
      <ImCheckboxChecked />
    </div>
  );
}

export default Task;
