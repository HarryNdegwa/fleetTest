import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { AiOutlineBars } from "react-icons/ai";
import "./style.css";
import { ImPlus } from "react-icons/im";
import MainHeader from "../MainHeader";
import { saveList } from "../../redux/actions/listActions";
import { connect } from "react-redux";
import { history } from "../../index";
import { v1 as uuidv1 } from "uuid";

function NewList(props) {
  const [task, setTask] = useState("");
  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (task.length === 0) {
      return;
    }
    if (e.key === "Enter") {
      // save list
      const t = {
        title: task,
        checked: false,
        starred: false,
        color: "white",
        dueDate: null,
        current: "UnStarred",
        id: uuidv1(),
      };
      const list = {
        listName: `My to-do list ${processDate()}`,
        id: uuidv1(),
        tasks: [[], [t], [], []],
      };

      props.saveList(list);
      setTask("");
      // redirect to dashboard
      history.push("/tasks-dashboard");
    }
  };

  const processDate = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    return `${month}1/${day}/${year}`;
  };

  const { menuOpen } = props;

  return (
    <React.Fragment>
      <div className={`${menuOpen ? "sm-top-header" : "sm-top-header-hide"}`}>
        <p>
          <Link to="/account">
            <span className="mx-1">
              <FaUser />
            </span>
            mike@gmail.com
          </Link>
        </p>
        <p>
          <Link to="/saved-lists">
            {" "}
            <span className="mr-1">
              <AiOutlineBars />
            </span>
            Manage Lists
          </Link>
        </p>
        <p>
          <Link to="/new-list">
            <span className="mr-1">
              <ImPlus />
            </span>
            New List
          </Link>
        </p>
      </div>
      <div className={`new-list ${menuOpen ? "showMenu" : null}`}>
        <div className="create-list-top-header">
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
        <MainHeader />
        <div className="create-list-secondary-header">
          <div className="container ">
            <h2>Create your to-do list below</h2>
          </div>
        </div>
        <div className="container">
          <input
            className="mt-3 new-list-input"
            placeholder="Type here e.g. Buy Bacon"
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    menuOpen: state.loginReducer.menuOpen,
  };
};

export default connect(mapStateToProps, { saveList })(NewList);
