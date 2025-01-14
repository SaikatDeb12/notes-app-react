import React from "react";
import Note from "../note/note";
import "./container.css";

function Container() {
  return (
    <div className="notes-container custom-scroll">
      <h1>Notes</h1>
      <div className="notes">
        <Note
          data={{
            text: "this is a text",
            color: "blueviolet",
            date: "14th Jan 2024",
          }}
        />
        <Note
          data={{
            text: "this is a text",
            color: "aqua",
            date: "14th Jan 2024",
          }}
        />
        <Note
          data={{
            text: "this is a text",
            color: "yellowgreen",
            date: "14th Jan 2024",
          }}
        />
        <Note
          data={{
            text: "this is a text",
            color: "blueviolet",
            date: "14th Jan 2024",
          }}
        />
        <Note
          data={{
            text: "this is a text",
            color: "blueviolet",
            date: "14th Jan 2024",
          }}
        />
        <Note
          data={{
            text: "this is a text",
            color: "blueviolet",
            date: "14th Jan 2024",
          }}
        />
        <Note
          data={{
            text: "this is a text",
            color: "blueviolet",
            date: "14th Jan 2024",
          }}
        />
        <Note
          data={{
            text: "this is a text",
            color: "blueviolet",
            date: "14th Jan 2024",
          }}
        />
      </div>
    </div>
  );
}

export default Container;
