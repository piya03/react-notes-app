import React, { useState, useEffect } from "react";
import "../App.css";
import CommonButton from "./CommonButton";
import EditMode from "./EditMode";

function Notes({ onlyWrite }) {
  const [showEdit, setShowEdit] = useState(false);
  console.log("Notes -> showEdit", showEdit);
  return (
    <div className="">
      {(onlyWrite || showEdit) && (
        <div>
          <div className="container">
            <textarea className="textarea" cols="30" rows="10"></textarea>
          </div>
          <div className="btn_container">
            <CommonButton
              value="Send"
              styleit={{
                background: "#00acb8",
                marginRight: "10px",
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
      <EditMode setShowEdit={setShowEdit} />
    </div>
  );
}

export default Notes;
