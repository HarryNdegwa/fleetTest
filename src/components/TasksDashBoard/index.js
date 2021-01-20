import React from "react";

import "./style.css";

function TaskDashBoard(props) {
  return (
    <div className="task-dashboard">
      <TopHeader />
      <div className="row">
        <div className="col-md-2 col-lg-3"></div>
        <div className="col-md-10 col-lg-9"></div>
      </div>
    </div>
  );
}

export default TaskDashBoard;
