import React from "react";
import Note from "../note/note";
import "./container.css";

function Container(props) {
  return (
    <div className="notes-container">
      <h1>Notes</h1>
      <div className="notes custom-scroll">
        {props.notes.map((item, key) => (
          <Note data={item} key={key} />
        ))}
      </div>
    </div>
  );
}

export default Container;
