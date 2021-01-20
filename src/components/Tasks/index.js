import React from "react";

import "./style.css";
import Task from "../Task";

function Tasks(props) {
  return (
    <div className="tasks">
      <input
        type="text"
        placeholder="Write your next task here..."
        className="task-input"
      />
      <Task />
    </div>
  );
}

export default Tasks;
