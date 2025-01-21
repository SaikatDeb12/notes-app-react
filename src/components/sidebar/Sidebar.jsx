import React, { useState } from "react";
import "./sidebar.css";
import { IoMdAddCircle } from "react-icons/io";
function Sidebar({ addNote }) {
  const colors = ["#fe9b72", "#fec971", "#00d4fe", "#b693fd", "#e4ee91"];
  const [display, setDisplay] = useState(false);

  return (
    <div className="sidebar">
      <IoMdAddCircle
        className="addIcon"
        onClick={() => {
          setDisplay(!display);
        }}
      />
      <ul className="colors-list">
        {colors.map((item, id) => {
          return (
            <li
              className={`${display && "color_active"}`}
              key={id}
              style={{ backgroundColor: item }}
              onClick={() => {
                addNote(item);
              }}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
