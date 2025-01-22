import { useState } from "react";
import "./App.css";
import Container from "./components/note_container/Container";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (color) => {
    const tempNote = [...notes];
    tempNote.push({
      id: notes.length,
      text: "",
      date: "24th Dec 2345",
      color: color,
    });
    setNotes(tempNote);
  };

  const deleteNote = (id) => {
    const tempNotes = [...notes];
    const ind = tempNotes.findIndex((ele) => ele.id == id);
    if (ind < 0) return;
    tempNotes.splice(ind, 1);
    setNotes(tempNotes);
  };

  return (
    <div className="App">
      <Sidebar addNote={addNote} />
      <Container notes={notes} deleteNote={deleteNote} />
    </div>
  );
}

export default App;
