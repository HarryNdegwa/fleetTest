import React from "react";
import Sidebar from "./SideBar";
import Tasks from "../Tasks";
import "./style.css";
import TopHeader from "../TopHeader";

function TaskDashBoard(props) {
  return (
    <div className="task-dashboard">
      <TopHeader />
      <div className="row">
        <div className="col-md-2 col-lg-3">
          <Sidebar />
        </div>
        <div className="col-md-10 col-lg-9">
          <div className="dashboard-secondary-header"></div>
          <Tasks />
        </div>
      </div>
    </div>
  );
}

export default TaskDashBoard;
