import React from "react";
import { ImCheckboxChecked, ImCross } from "react-icons/im";
import "./style.css";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { AiFillStar } from "react-icons/ai";
import { BsTagFill } from "react-icons/bs";
import "react-datepicker/dist/react-datepicker.css";

function Task(props) {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="task">
      <div className="task-info">
        <ImCheckboxChecked />
        <input type="text" />
        <span className="task-date">no due date</span>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </div>
      <div className="task-actions">
        <AiFillStar />
        <BsTagFill />
        <ImCross />
      </div>
    </div>
  );
}

export default Task;
