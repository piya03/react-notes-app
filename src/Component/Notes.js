import React, { useState, useEffect } from "react";
import "../App.css";
import CommonButton from "./CommonButton";
import EditMode from "./EditMode";

// App
//   > <H1></H1>
//   > Note writeonly
//   > NotesList
//       > loop the data and render Notes
//       >Note
//       >Note
//       >Note
//       >Note
function Notes({ onlyWrite }) {
  const [textVal, setTextVal] = useState("");
  const [data, setData] = useState([{}]);

  return (
    <div className="">
      <div>
        <div className="container">
          <textarea
            value={textVal}
            onChange={(e) => {
              setTextVal(e.target.value);
            }}
            className="textarea"
            cols="30"
            rows="10"
          />
        </div>
        <div className="btn_container">
          <CommonButton
            value="Send"
            styleit={{
              background: "#00acb8",
              marginRight: "10px",
            }}
            onClick={() => {
              if (textVal) {
                data.unshift({
                  name: textVal,
                  id: Math.random(),
                });
                setData([...data]);
                setTextVal("");
              }
            }}
          />
          <CommonButton
            value="Cancel"
            styleit={{
              background: "#fd4f60",
            }}
            onClick={() => {
              setTextVal("");
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Notes;
