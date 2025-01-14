import React from "react";
import "./sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
  const color = ["#fe9b72", "#fec971", "#00d4fe", "#b693fd", "#e4ee91"];

  return (
    <div className="sidebar">
      <FontAwesomeIcon icon={faPlus} />
      <ul className="sidebar-list">
        {color.map((item, key) => {
          <li
            key={key}
            className="sidebar-list-items"
            style={{ backgroundColor: item }}
          ></li>;
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
