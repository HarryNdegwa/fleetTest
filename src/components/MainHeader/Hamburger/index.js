import React from "react";
import HamburgerMenu from "react-hamburger-menu";

import "./style.css";

function Hamburger(props) {
  const handleClick = (e) => {};
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

export default Hamburger;
