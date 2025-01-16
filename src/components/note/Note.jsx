import React from "react";
import "./note.css";
import { IoMdAddCircleOutline } from "react-icons/io";
import { MdDelete } from "react-icons/md";

function Note(props) {
  const dateFormat = (value) => {
    if (!value) return "";
    const date = new Date(value);
    const monthName = [
      "Jan",
      "Feb",
      "March",
      "April",
      "May",
      "June",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];

    let hrs = date.getHours();
    let amPm = hrs > 12 ? "PM" : "AM";
    hrs = hrs ? hrs : "12";
    hrs = hrs > 12 ? (hrs = 24 - hrs) : hrs;

    let min = date.getMinutes();
    min = min < 10 ? "0" + min : min;
    let day = date.getDate();
    const month = monthName[date.getMonth()];

    return `${hrs}:${min} ${amPm} ${day} ${month}`;
  };

  return (
    <div className="indi-notes" style={{ backgroundColor: props.data.color }}>
      <textarea className="notes-text" defaultValue={props.data.text} />
      <div className="footer">
        <p className="notes-date">{dateFormat(props.data.date)}</p>
        <MdDelete className="deleteIcon" />
      </div>
    </div>
  );
}

export default Note;
