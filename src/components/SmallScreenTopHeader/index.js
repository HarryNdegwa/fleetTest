import React from "react";
import { connect } from "react-redux";
import "./style.css";

function index(props) {
  const { menuOpen } = props;
  return (
    <div className={`${menuOpen ? "sm-top-header" : "sm-top-header-hide"}`}>
      <p>mike@gmail.com</p>
      <p>Manage Lists</p>
      <p>New List</p>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    menuOpen: state.loginReducer.menuOpen,
  };
};

export default connect(mapStateToProps)(index);
