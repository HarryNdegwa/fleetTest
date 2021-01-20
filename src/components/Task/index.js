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
      <ImCheckboxChecked />
      <input type="text" />
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
      <AiFillStar />
      <BsTagFill />
      <ImCross />
    </div>
  );
}

export default Task;
