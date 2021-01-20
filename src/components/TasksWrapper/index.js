import React from "react";

import "./style.css";
import TopHeader from "../TopHeader";
import SmallScreenTopHeader from "../SmallScreenTopHeader";
import MainHeader from "../MainHeader";
import Tasks from "../Tasks";

function TasksWrapper(props) {
  return (
    <div className="tasks-wrapper">
      <TopHeader />
      <SmallScreenTopHeader />
      <MainHeader />
      <div className="container p-0">
        <Tasks />
      </div>
    </div>
  );
}

export default TasksWrapper;
