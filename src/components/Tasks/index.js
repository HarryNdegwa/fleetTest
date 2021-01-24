import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./style.css";
import Task from "../Task";
import { addTask } from "../../redux/actions/taskActions";
import { v1 as uuidv1 } from "uuid";

function Tasks(props) {
  const [task, setTask] = useState("");
  useEffect(() => {}, [props.tasks]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (task.length === 0) {
      return;
    }
    if (e.key === "Enter") {
      // save list

      const t = {
        title: task,
        checked: false,
        starred: false,
        color: "white",
        dueDate: null,
        current: "UnStarred",
        id: uuidv1(),
      };

      setTask("");

      props.addTask(t);
    }
  };

  const { tasks, persistedList } = props;

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

      <div>
        {persistedList && persistedList.tasks[2] ? (
          <React.Fragment>
            {persistedList.tasks[2].map((task, idx) => {
              return <Task key={idx} data={task} id={idx} />;
            })}
          </React.Fragment>
        ) : null}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    tasks: state.taskReducer.tasks,
    persistedList: state.listReducer.persistedList,
  };
};

export default connect(mapStateToProps, { addTask })(Tasks);
