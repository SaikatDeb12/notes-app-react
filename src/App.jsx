import { useState } from "react";
import "./App.css";
import Container from "./components/note_container/Container";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  const notes = [
    {
      text: "this is a text",
      time: "3:12AM",
      color: "cyan",
    },
    {
      text: "this is a text",
      time: "3:12AM",
      color: "cyan",
    },
    {
      text: "this is a text",
      time: "3:12AM",
      color: "cyan",
    },
  ];

  return (
    <div className="App">
      <Sidebar />
      <Container notes={notes} />
    </div>
  );
}

export default App;
