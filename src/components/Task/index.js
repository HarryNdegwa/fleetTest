import React, { useState } from "react";
import { ImCheckboxChecked, ImCross } from "react-icons/im";
import "./style.css";
import { AiFillStar } from "react-icons/ai";
import {
  BsTagFill,
  BsCaretLeftFill,
  BsFillCaretRightFill,
} from "react-icons/bs";
import "react-datepicker/dist/react-datepicker.css";
import { connect } from "react-redux";
import {
  checkTask,
  unCheckTask,
  starTask,
  unStarTask,
  deleteTask,
} from "../../redux/actions/taskActions";

function Task(props) {
  const [showActions, setShowActions] = useState(false);
  const handleShowActionsClick = (e) => {
    setShowActions(!showActions);
  };

  const handleDeleteTask = (e, data) => {
    // eslint-disable-next-line no-restricted-globals
    const proceed = confirm("Delete this task?");
    if (proceed) {
      // delete function
      props.deleteTask(data);
      setShowActions(!showActions);
    } else {
      return;
    }
  };

  const handleTaskCheck = (e, data) => {
    props.checkTask(data);
  };

  const handleTaskUnCheck = (e, data) => {
    props.unCheckTask(data);
  };

  const handleTaskStar = (e, data) => {
    props.starTask(data);
    setShowActions(!showActions);
  };

  const handleTaskUnStar = (e, data) => {
    props.unStarTask(data);
    setShowActions(!showActions);
  };

  const { data } = props;
  // console.log(data);
  return (
    <div className="task">
      <div className="task-info">
        {data.checked ? (
          <ImCheckboxChecked
            style={{ fontSize: "30px", color: "orange" }}
            onClick={(e) => handleTaskUnCheck(e, data)}
          />
        ) : (
          <ImCheckboxChecked
            onClick={(e) => handleTaskCheck(e, data)}
            style={{ fontSize: "30px" }}
          />
        )}
        <div className="task-inner-info">
          <h6 className="mx-3">
            {data.title}
            <small className="task-date ml-2">
              {data.dueDate ? data.dueDate : "No due date"}
            </small>
          </h6>
        </div>
      </div>
      <div className="task-actions-wrapper">
        <div className="task-actions">
          {data.starred ? (
            <AiFillStar
              style={{ fontSize: "25px", color: "orange" }}
              className="task-action-icon"
              onClick={(e) => handleTaskUnStar(e, data)}
            />
          ) : (
            <AiFillStar
              style={{ fontSize: "25px" }}
              className="task-action-icon"
              onClick={(e) => handleTaskStar(e, data)}
            />
          )}
          <BsTagFill
            style={{ fontSize: "22px" }}
            className="task-action-icon"
          />
          <ImCross
            style={{ fontSize: "20px" }}
            className="task-action-icon"
            onClick={(e) => handleDeleteTask(e, data)}
          />
        </div>
      </div>
      <div className="task-actions-sm-icon">
        <BsCaretLeftFill onClick={handleShowActionsClick} />
      </div>
      {showActions ? (
        <div className="task-actions-sm-wrapper">
          <div className="task-actions-close-wrapper">
            <BsFillCaretRightFill
              onClick={handleShowActionsClick}
              style={{ color: "orange" }}
            />
          </div>
          <div className="task-sm-actions">
            {data.starred ? (
              <AiFillStar
                style={{ fontSize: "20px", color: "orange" }}
                className="task-action-icon"
                onClick={(e) => handleTaskUnStar(e, data)}
              />
            ) : (
              <AiFillStar
                style={{ fontSize: "20px" }}
                className="task-action-icon"
                onClick={(e) => handleTaskStar(e, data)}
              />
            )}

            <BsTagFill
              style={{ fontSize: "17px" }}
              className="task-action-icon"
            />
            <ImCross
              style={{ fontSize: "15px" }}
              className="task-action-icon"
              onClick={(e) => handleDeleteTask(e, data)}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    tasks: state.taskReducer.tasks,
  };
};

export default connect(mapStateToProps, {
  checkTask,
  unCheckTask,
  starTask,
  unStarTask,
  deleteTask,
})(Task);
