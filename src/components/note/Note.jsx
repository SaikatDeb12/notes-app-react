import React from "react";
import "./note.css";
function Note(props) {
  return (
    <div className="indi-notes" style={{ backgroundColor: props.data.color }}>
      <textarea className="notes-text" defaultValue={props.data.text} />
      <p className="notes-date">{props.data.date}</p>
    </div>
  );
}

export default Note;
