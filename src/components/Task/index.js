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

function Task(props) {
  const [showActions, setShowActions] = useState(false);
  const handleShowActionsClick = (e) => {
    setShowActions(!showActions);
  };

  const handleDeleteTask = (e, data) => {};

  const { data, id } = props;
  return (
    <div className="task">
      <div className="task-info">
        <ImCheckboxChecked style={{ fontSize: "30px" }} />
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
          <AiFillStar
            style={{ fontSize: "25px" }}
            className="task-action-icon"
          />
          <BsTagFill
            style={{ fontSize: "22px" }}
            className="task-action-icon"
          />
          <ImCross style={{ fontSize: "20px" }} className="task-action-icon" />
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
            <AiFillStar
              style={{ fontSize: "20px" }}
              className="task-action-icon"
            />
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

export default Task;
