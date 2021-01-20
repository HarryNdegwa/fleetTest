import React from "react";
import Sidebar from "./SideBar";
import Tasks from "../Tasks";
import "./style.css";
import Hamburger from "../MainHeader/Hamburger";

function TaskDashBoard(props) {
  return (
    <div className="task-dashboard">
      <div className="dashboard-main-header">
        <Hamburger />
      </div>
      <div className="dashboard-top-header-wrapper">
        <div className="dashboard-top-header"></div>
      </div>
      <div className="row no-gutters">
        <div className="col-md-2 col-lg-3">
          <Sidebar />
        </div>
        <div className="col-md-10 col-lg-9 ">
          <div className="dashboard-secondary-header"></div>
          <div className="px-2">
            <Tasks />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskDashBoard;
