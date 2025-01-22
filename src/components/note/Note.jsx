import React from "react";
import "./note.css";
import { MdDelete } from "react-icons/md";

function Note({ data, deleteNote }) {
  return (
    <div className="indi-notes" style={{ backgroundColor: data.color }}>
      <textarea className="notes-text" defaultValue={data.text} />
      <div className="footer">
        <p className="notes-date">{data.date}</p>
        <MdDelete
          className="deleteIcon"
          onClick={() => {
            deleteNote(data.id);
          }}
        />
      </div>
    </div>
  );
}

export default Note;
