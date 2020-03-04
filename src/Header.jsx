import React from "react";
import "./App.css";

const Header = ({ width, color, children }) => {
  return (
    <div
      className="header-container"
      style={{ backgroundColor: color, width: width }}
    >
      <div>{children}</div>
    </div>
  );
};

export default Header;
