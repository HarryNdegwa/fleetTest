import React, { useState } from "react";
import { ImCheckboxChecked, ImCross } from "react-icons/im";
import "./style.css";
import DatePicker from "react-datepicker";
import { AiFillStar } from "react-icons/ai";
import { BsTagFill } from "react-icons/bs";
import "react-datepicker/dist/react-datepicker.css";

function Task(props) {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="task">
      <div className="task-info">
        <ImCheckboxChecked style={{ fontSize: "30px" }} />
        <div className="task-inner-info">
          <div className="task-inner-info-content">
            <h6 className="mx-3">Get some code done</h6>
          </div>
          <small className="task-date">No due date</small>
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
      <div className="task-actions-sm-wrapper">
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
    </div>
  );
}

export default Task;
