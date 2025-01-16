import React, { useState } from "react";
import "./sidebar.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IoMdAddCircleOutline } from "react-icons/io";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function Sidebar(props) {
  const color = ["#fe9b72", "#fec971", "#00d4fe", "#b693fd", "#e4ee91"];

  const [displayList, toggle] = useState(false);

  return (
    <div className="sidebar">
      <IoMdAddCircleOutline
        icon={faPlus}
        onClick={() => {
          toggle(!displayList);
        }}
      />
      <ul className={`sidebar-list`}>
        {color.map((item, key) => {
          return (
            <li
              key={key}
              className={`${
                displayList ? "sidebar-list-items_active" : "sidebar-list-items"
              }`}
              style={{ backgroundColor: item }}
              onClick={() => {
                return props.addNotes(item);
              }}
            ></li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
