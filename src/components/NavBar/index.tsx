import React from "react";

import logo from "../../assets/logo.png";
import "./styles.scss";

const NavBar = (): JSX.Element => (
  <div className="nav-bar">
    <img alt="" src={logo} width={50} />
    <h4>Reddit Challenge</h4>
  </div>
);

export default NavBar;
