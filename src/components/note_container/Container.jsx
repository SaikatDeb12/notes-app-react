import React from "react";
import Note from "../note/note";
import "./container.css";

function Container({ notes, updatedNotes }) {
  const reverseNote = (arr) => {
    const temp = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      temp.push(arr[i]);
    }

    return temp;
  };

  const newNotes = reverseNote(notes);
  // console.log(notes, newNotes);
  return (
    <div className="notes-container">
      <h1>Notes</h1>
      <div className="notes custom-scroll">
        {newNotes.map((item, index) => (
          <Note data={item} key={index} updatedNotes={updatedNotes} />
        ))}
      </div>
    </div>
  );
}

export default Container;
