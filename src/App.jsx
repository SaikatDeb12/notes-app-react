import { useState } from "react";
import "./App.css";
import Container from "./components/note_container/Container";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  const [notes, setNotes] = useState([]);
  const d = new Date();
  const addNotes = (color) => {
    const tempNote = [...notes];
    tempNote.push({
      text: "",
      date: Date.now(),
      color: color,
    });
    setNotes(tempNote);
  };

  return (
    <div className="App">
      <Sidebar addNotes={addNotes} />
      <Container notes={notes} />
    </div>
  );
}

export default App;
