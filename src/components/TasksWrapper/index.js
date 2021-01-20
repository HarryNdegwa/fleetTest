import React from "react";

import "./style.css";
import TopHeader from "../TopHeader";
import SmallScreenTopHeader from "../SmallScreenTopHeader";
import MainHeader from "../MainHeader";

function TasksWrapper(props) {
  return (
    <div className="tasks-wrapper">
      <TopHeader />
      <SmallScreenTopHeader />
      <MainHeader />
    </div>
  );
}

export default TasksWrapper;
