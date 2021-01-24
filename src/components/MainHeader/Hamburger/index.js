import React from "react";
import HamburgerMenu from "react-hamburger-menu";
import { connect } from "react-redux";
import { toggleMenu } from "../../../redux/actions/loginActions";
import "./style.css";

function Hamburger(props) {
  const handleClick = (e) => {
    props.toggleMenu();
  };
  return (
    <div className="sm-hamburger">
      <HamburgerMenu
        isOpen={false}
        menuClicked={handleClick}
        width={15}
        height={10}
        color="white"
        strokeWidth={3}
      />
    </div>
  );
}

export default connect(null, { toggleMenu })(Hamburger);
