import React from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { AiOutlineBars } from "react-icons/ai";
import "./style.css";
import { ImPlus } from "react-icons/im";
import MainHeader from "../MainHeader";

function NewList(props) {
  return (
    <div className="new-list">
      <div className="create-list-top-header">
        <p className="mr-3">
          <span className="mx-1">
            <FaUser />
          </span>
          mike@gmail.com
        </p>

        <Link to="/" className="db-link mr-3">
          <span className="mr-1">
            <AiOutlineBars />
          </span>
          Manage Lists
        </Link>
        <Link to="/" className="db-link mr-3">
          <span className="mr-1">
            <ImPlus />
          </span>
          New List
        </Link>
      </div>
      <MainHeader />
      <div className="create-list-secondary-header">
        <h2>Create your to-do list below</h2>
      </div>
      <input
        className="mt-3 new-list-input"
        placeholder="Type here e.g. Buy Bacon"
      />
    </div>
  );
}

export default NewList;
