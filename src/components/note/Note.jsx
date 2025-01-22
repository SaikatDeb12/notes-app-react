import React, { useRef } from "react";
import "./note.css";
import { MdDelete } from "react-icons/md";

function Note({ data, deleteNote, updateNotes }) {
  const timeoutRef = useRef(null); //useRef
  const debounceInterval = 500; // in ms

  const debounce = (func, delay) => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(func, delay);
  };

  const updateText = (text, id) => {
    debounce(() => {
      updateNotes(text, id);
      localStorage.setItem(`note-${id}`, text);
    }, debounceInterval);
  };

  return (
    <div className="indi-notes" style={{ backgroundColor: data.color }}>
      <textarea
        className="notes-text"
        defaultValue={data.text}
        onChange={(event) => updateText(event.target.value, data.id)}
      />
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
