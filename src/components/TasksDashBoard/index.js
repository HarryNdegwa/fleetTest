import React, { useEffect } from "react";
import Sidebar from "./SideBar";
import Tasks from "../Tasks";
import "./style.css";
import Hamburger from "../MainHeader/Hamburger";
import { ImCopy } from "react-icons/im";
import { Link, Redirect } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { AiOutlineBars } from "react-icons/ai";
import { ImPlus } from "react-icons/im";
import { connect } from "react-redux";
import { setUpTasksArray } from "../../redux/actions/taskActions";
import { cloneList } from "../../redux/actions/listActions";

function TaskDashBoard(props) {
  const { persistedList, lists, setUpTasksArray } = props;
  useEffect(() => {
    // setup tasks array of the persistedList
    setUpTasksArray(lists);
  }, [persistedList, lists, setUpTasksArray]);

  const handleCloneClick = () => {
    // do
    props.cloneList();
  };

  if (!lists || lists.length === 0) {
    return <Redirect to="/new-list" />;
  }

  return (
    <div className="task-dashboard">
      <div className="dashboard-main-header">
        <Hamburger />
      </div>
      <div className="dashboard-top-header-wrapper">
        <div className="dashboard-top-header">
          <Link to="/account" className="link mr-3">
            <span className="mx-1">
              <FaUser />
            </span>
            mike@gmail.com
          </Link>
          <Link to="/saved-lists" className="link mr-3">
            <span className="mr-1">
              <AiOutlineBars />
            </span>
            Manage Lists
          </Link>
          <Link to="/new-list" className="link mr-3">
            <span className="mr-1">
              <ImPlus />
            </span>
            New List
          </Link>
        </div>
      </div>
      <div className="row no-gutters">
        <div className="col-md-2 col-lg-3">
          <Sidebar />
        </div>
        <div className="col-md-10 col-lg-9 ">
          <div className="dashboard-secondary-header">
            <div className="row m-0">
              <div className="col-6 db-secondary-header-title">
                <h5>My to-do list 01/20/2021</h5>
              </div>
              <div className="col-6 text-right">
                <button className="btn btn-md" onClick={handleCloneClick}>
                  <ImCopy style={{ fontSize: "20px", color: "#fff" }} />{" "}
                  <span className="ml-2 y text-light">Clone This List</span>
                </button>
              </div>
            </div>
          </div>
          <div className="px-2">
            <Tasks />
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    persistedList: state.listReducer.persistedList,
    lists: state.listReducer.lists,
  };
};

export default connect(mapStateToProps, { setUpTasksArray, cloneList })(
  TaskDashBoard
);
