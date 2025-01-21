import React from "react";
import "./sidebar.css";
import { IoMdAddCircle } from "react-icons/io";
function Sidebar() {
  const colors = ["#fe9b72", "#fec971", "#00d4fe", "#b693fd", "#e4ee91"];

  return (
    <div className="sidebar">
      <IoMdAddCircle className="addIcon" />
      <ul className="colors-list">
        {colors.map((item, id) => {
          return (
            <li
              className="color"
              key={id}
              style={{ backgroundColor: item }}
            ></li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
