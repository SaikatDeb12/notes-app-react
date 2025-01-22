import { useEffect, useState } from "react";
import "./App.css";
import Container from "./components/note_container/Container";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes-app")) || []
  );
  const toMonths = (digit) => {
    const months = {
      1: "Jan",
      2: "Feb",
      3: "Mar",
      4: "Apr",
      5: "May",
      6: "Jun",
      7: "July",
      8: "Aug",
      9: "Sep",
      10: "Oct",
      11: "Nov",
      12: "Dec",
    };
    return months[digit];
  };

  const addDate = () => {
    let obj = new Date();
    let time = obj.toLocaleString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    let date = obj.getDate();
    let month = toMonths(obj.getMonth() + 1);

    return `${date} ${month} ${time}`;
  };

  const addNote = (color) => {
    const tempNote = [...notes];
    tempNote.push({
      id: notes.length,
      text: "",
      date: addDate(),
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

  const updateText = () => {};

  useEffect(() => {
    localStorage.setItem("notes-app", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="App">
      <Sidebar addNote={addNote} />
      <Container
        notes={notes}
        deleteNote={deleteNote}
        updateText={updateText}
      />
    </div>
  );
}

export default App;
