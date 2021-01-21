import React from "react";
import { connect } from "react-redux";
import "./style.css";
import Task from "../Task";

function Tasks(props) {
  const { tasks } = props;
  return (
    <div className="tasks">
      <input
        type="text"
        placeholder="Write your next task here..."
        className="task-input"
      />
      {tasks &&
        tasks.map((task, idx) => {
          return <Task key={idx} data={task} />;
        })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    tasks: state.taskReducer.tasks,
  };
};

export default connect(mapStateToProps)(Tasks);
