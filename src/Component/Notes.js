import React, { useState, useEffect } from "react";
import "../App.css";
import CommonButton from "./CommonButton";
import EditMode from "./EditMode";

function Notes({ onlyWrite }) {
  const [showEdit, setShowEdit] = useState(false);
  const [textVal, setTextVal] = useState("");
  console.log("Notes -> textVal", textVal);
  console.log("Notes -> showEdit", showEdit);
  const [data, setData] = useState([
    { name: "priyanka" },
    { name: "Anil" },
    { name: "Sudhir" },
  ]);
  console.log("Notes -> data", data);

  return (
    <div className="">
      {(onlyWrite || showEdit) && (
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
                console.log("send here");
                data.unshift({ name: textVal });
              }}
            />
            <CommonButton
              value="Cancel"
              styleit={{
                background: "#fd4f60",
              }}
            />
          </div>
        </div>
      )}
      {!onlyWrite &&
        data.map((each, index) => {
          return <EditMode setShowEdit={setShowEdit} each={each} />;
        })}
    </div>
  );
}

export default Notes;
