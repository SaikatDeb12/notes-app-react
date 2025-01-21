import { useState } from "react";
import "./App.css";
import Container from "./components/note_container/Container";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (color) => {
    const tempNote = [...notes];
    tempNote.push({
      id: notes.length + 1,
      text: "",
      date: "24th Dec 2345",
      color: color,
    });
    setNotes(tempNote);
  };

  return (
    <div className="App">
      <Sidebar addNote={addNote} />
      <Container notes={notes} />
    </div>
  );
}

export default App;
