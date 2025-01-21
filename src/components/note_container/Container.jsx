import React from "react";
import Note from "../note/note";
import "./container.css";

function Container({ notes }) {
  return (
    <div className="notes-container custom-scroll">
      <h1>Notes</h1>
      <div className="notesList">
        {notes.map((item, id) => (
          <Note data={item} key={id} />
        ))}
      </div>
    </div>
  );
}

export default Container;
