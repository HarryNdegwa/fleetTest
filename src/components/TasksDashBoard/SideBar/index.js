import React from "react";
import { connect } from "react-redux";
import "./style.css";
import { FaChevronRight } from "react-icons/fa";

function Sidebar(props) {
  const { lists } = props;
  const checkIfActive = (list) => {
    if (list.id == props.persistedList.id) {
      return true;
    }
    return false;
  };

  return (
    <div className="sidebar">
      <div style={{ height: "70px" }}></div>
      <ul>
        {lists &&
          lists.map((list, idx) => {
            return (
              <li
                key={idx}
                className={`${
                  checkIfActive(list) ? "active-background" : null
                }`}
              >
                <h6 className="sidebar-list-title">
                  {list.listName}
                  <span>
                    {checkIfActive(list) ? (
                      <span>
                        <FaChevronRight />
                      </span>
                    ) : (
                      <span
                        className="badge"
                        style={{ backgroundColor: "#333333" }}
                      >
                        10
                      </span>
                    )}
                  </span>
                </h6>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    lists: state.listReducer.lists,
    persistedList: state.listReducer.persistedList,
  };
};

export default connect(mapStateToProps)(Sidebar);
