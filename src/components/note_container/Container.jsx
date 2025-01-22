import React from "react";
import Note from "../note/Note.jsx";
import "./container.css";

function Container({ notes, deleteNote, updateNotes }) {
  const reverseNotes = (arr) => {
    const temp = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      temp.push(arr[i]);
    }
    return temp;
  };

  const newNotes = reverseNotes(notes);

  return (
    <div className="notes-container custom-scroll">
      <h1>Notes</h1>
      <div className="notesList">
        {newNotes.length == 0 ? (
          <p className="no-notes">Add some notes :)</p>
        ) : (
          newNotes.map((item) => (
            //each note getting unique key.. from (notes.id)
            <Note
              data={item}
              key={item.id}
              deleteNote={deleteNote}
              updateNotes={updateNotes}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Container;
