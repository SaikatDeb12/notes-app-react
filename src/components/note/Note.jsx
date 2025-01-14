import React from "react";
import "./note.css";
function Note() {
  return (
    <div className="notes">
      <textarea className="notes-text"></textarea>
      <p className="notes-date">14th Jan 2024</p>
    </div>
  );
}

export default Note;
