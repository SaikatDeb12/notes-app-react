import React, { useState } from "react";
import "./sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
  const color = ["#fe9b72", "#fec971", "#00d4fe", "#b693fd", "#e4ee91"];

  const [displayList, toggle] = useState(true);

  return (
    <div className="sidebar">
      <FontAwesomeIcon
        icon={faPlus}
        onClick={() => {
          toggle(!displayList);
          // console.log("changed");
        }}
      />
      <ul className="sidebar-list">
        {color.map((item, key) => {
          return (
            displayList && (
              <li
                key={key}
                className="sidebar-list-items"
                style={{ backgroundColor: item }}
                onClick={() => {
                  //to add new note
                }}
              ></li>
            )
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
