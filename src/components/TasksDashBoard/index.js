import React from "react";
import Sidebar from "./SideBar";
import Tasks from "../Tasks";
import "./style.css";
import Hamburger from "../MainHeader/Hamburger";
import { ImCopy } from "react-icons/im";

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
          <div className="dashboard-secondary-header">
            <div className="row m-0">
              <div className="col-6 db-secondary-header-title">
                <h5>My to-do list 01/20/2021</h5>
              </div>
              <div className="col-6">
                <button className="btn btn-md clone-btn">
                  <ImCopy style={{ fontSize: "20px", color: "#fff" }} />{" "}
                  <span className="ml-2 y">Clone This List</span>
                </button>
              </div>
            </div>
          </div>
          <div className="px-2">
            <Tasks />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskDashBoard;
