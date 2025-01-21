import { useEffect, useState } from "react";
import "./App.css";
import Container from "./components/note_container/Container";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes-app")) || []
  );

  useEffect(() => {
    localStorage.setItem("notes-app", JSON.stringify(notes));
  }, [notes]);

  const addNotes = (color, value) => {
    const tempNote = [...notes];
    tempNote.push({
      text: value,
      date: Date.now(),
      color: color,
    });
    setNotes(tempNote);
  };

  // const updateNoteText = (index, text) => {
  //   const updatedText = [...notes];
  //   updatedText[index].text = text;
  //   setNotes(updatedText);
  // };

  return (
    <div className="App">
      <Sidebar addNotes={addNotes} />
      <Container notes={notes} updatedNotes={updateNoteText} />
    </div>
  );
}

export default App;
