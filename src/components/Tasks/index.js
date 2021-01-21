import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./style.css";
import Task from "../Task";
import { saveList } from "../../redux/actions/listActions";
import { v1 as uuidv1 } from "uuid";

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
      // save list
      const t = {
        title: task,
        checked: false,
        starred: false,
        color: "white",
        dueDate: null,
        current: "unStarred",
        id: uuidv1(),
      };
      const list = {
        listName: `My to-do list ${processDate()}`,
        tasks: [[], [t], []],
      };

      props.saveList(list);
    }
  };

  const processDate = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    return `${month}1/${day}/${year}`;
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

export default connect(mapStateToProps, { saveList })(Tasks);
