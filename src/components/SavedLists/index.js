import React from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { AiOutlineBars } from "react-icons/ai";
import "./style.css";
import { ImPlus, ImCross } from "react-icons/im";
import MainHeader from "../MainHeader";
import { connect } from "react-redux";
import { logout } from "../../redux/actions/loginActions";
import { history } from "../../index";

function SavedLists(props) {
  const handleListClick = (e, id) => {
    // persist list id
  };

  const handleLogout = () => {
    props.logout();
    history.push("/login");
  };
  const { lists } = props;
  return (
    <div className="saved-lists">
      <div className="saved-list-top-header">
        <Link to="/account" className="link mr-3">
          <span className="mx-1">
            <FaUser />
          </span>
          mike@gmail.com
        </Link>

        <Link to="/saved-lits" className="link mr-3">
          <span className="mr-1">
            <AiOutlineBars />
          </span>
          My Saved Lists
        </Link>
        <p
          className="link mr-3"
          style={{ cursor: "pointer" }}
          onClick={handleLogout}
        >
          Logout
        </p>
      </div>

      <MainHeader />
      <div className="container mt-5">
        <h2>My Saved Lists</h2>

        <Link to="/new-list" className="btn btn-lg new-list-btn my-4">
          <span className="mr-2">
            <ImPlus />
          </span>
          <span style={{ fontWeight: "bold" }}>Create a New List</span>
        </Link>

        <div className="saved-list-wrapper">
          {lists &&
            lists.map((list, idx) => (
              <span key={idx} className="saved-list">
                <h6
                  style={{ display: "inline-block" }}
                  onClick={(e) => handleListClick(e, idx)}
                >
                  {list.title}
                </h6>
                <span className="badge bg-dark mx-2 text-white">10</span>
                <ImCross
                  style={{ fontSize: "10px" }}
                  className="task-action-icon"
                />
              </span>
            ))}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    lists: state.listReducer.lists,
  };
};

export default connect(mapStateToProps, { logout })(SavedLists);
