import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./style.css";
import Task from "../Task";

function Tasks(props) {
  const [task, setTask] = useState("");
  useEffect(() => {}, [props.tasks]);
  const { tasks } = props;

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (task.length === 0) {
      return;
    }
    if (e.key === "Enter") {
    }
  };
  return (
    <div className="tasks">
      <input
        type="text"
        placeholder="Write your next task here..."
        className="task-input"
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      {tasks &&
        tasks.map((task, idx) => {
          return <Task key={idx} data={task} id={idx} />;
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
