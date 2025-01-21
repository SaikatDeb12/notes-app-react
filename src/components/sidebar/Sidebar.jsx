import React from "react";
import "./sidebar.css";
import { IoMdAddCircle } from "react-icons/io";
function Sidebar() {
  return (
    <div className="sidebar">
      <IoMdAddCircle className="addIcon" />
      <div className="colors">
        <p className="color"></p>
        <p className="color"></p>
        <p className="color"></p>
      </div>
    </div>
  );
}

export default Sidebar;
