import React from "react";
import Hamburger from "./Hamburger";

import "./style.css";

function MainHeader(props) {
  return (
    <div className="container-fluid main-header">
      <Hamburger />
    </div>
  );
}

export default MainHeader;
