import React from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { AiOutlineBars } from "react-icons/ai";
import "./style.css";
import { ImPlus } from "react-icons/im";

function SavedLists(props) {
  return (
    <div className="saved-lists">
      <div className="saved-list-top-header">
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
          My Saved Lists
        </Link>
        <Link to="/" className="db-link mr-3">
          Logout
        </Link>
      </div>
      <div className="container mt-5">
        <h2>My Saved Lists</h2>

        <Link to="/">
          <span>
            <ImPlus />
            Create New List
          </span>
        </Link>
      </div>
    </div>
  );
}

export default SavedLists;
