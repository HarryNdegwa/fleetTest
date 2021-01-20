import React, { useState } from "react";

import "./style.css";
import HamburgerMenu from "react-hamburger-menu";

function MainHeader(props) {
  const [hamOpen, setHamOpen] = useState(false);

  const handleClick = (e) => {
    setHamOpen(!hamOpen);
  };

  return (
    <div className="container-fluid main-header">
      <div className="sm-hamburger">
        <HamburgerMenu
          isOpen={hamOpen}
          menuClicked={handleClick}
          width={15}
          height={10}
          color="white"
          strokeWidth={3}
        />
      </div>
    </div>
  );
}

export default MainHeader;
