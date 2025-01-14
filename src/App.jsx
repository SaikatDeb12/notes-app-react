import { useState } from "react";
import "./App.css";
import Container from "./components/note_container/Container";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Container />
    </div>
  );
}

export default App;
