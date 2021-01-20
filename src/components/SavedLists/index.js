import React from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { AiOutlineBars } from "react-icons/ai";
import "./style.css";
import { ImPlus, ImCross } from "react-icons/im";
import MainHeader from "../MainHeader";

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

      <MainHeader />
      <div className="container mt-5">
        <h2>My Saved Lists</h2>

        <Link to="/" className="btn btn-lg new-list-btn my-4">
          <span className="mr-2">
            <ImPlus />
          </span>
          <span style={{ fontWeight: "bold" }}>Create a New List</span>
        </Link>

        <div className="saved-list-wrapper">
          <span className="saved-list">
            <h6 style={{ display: "inline-block" }}>Helloo world</h6>
            <span className="badge bg-dark mx-2 text-white">10</span>
            <ImCross
              style={{ fontSize: "10px" }}
              className="task-action-icon"
            />
          </span>
          <span className="saved-list">
            <h6 style={{ display: "inline-block" }}>Helloo world</h6>
            <span className="badge bg-dark mx-2 text-white">10</span>
            <ImCross
              style={{ fontSize: "10px" }}
              className="task-action-icon"
            />
          </span>
        </div>
      </div>
    </div>
  );
}

export default SavedLists;
