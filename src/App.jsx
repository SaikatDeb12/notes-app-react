import { useState } from "react";
import "./App.css";
import Container from "./components/note_container/Container";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  const [notes, setNotes] = useState([
    {
      text: "",
      date: "12th Aug 2020",
      color: "blueviolet",
    },
  ]);

  const addNote = (color) => {
    const tempNote = [...notes];
    tempNote.push({ text: "", date: "24th Dec 1990", color: color });
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
