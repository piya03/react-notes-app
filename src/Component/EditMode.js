import React, { useState } from "react";
import CommonButton from "./CommonButton";

import "../App.css";

function EditMode({ each, data, setData, onlyWrite, addNotes }) {
  //const [text, setText] = useState(each?.name);
  const [textVal, setTextVal] = useState("");

  const [showEditDel, setShowEditDel] = useState(false);
  const [toggle, setToggle] = useState(false);
  console.log("EditMode -> toggle", toggle);
  return (
    <React.Fragment>
      {/* ////// */}

      {(toggle || onlyWrite) && (
        <div style={{ marginTop: "15px" }}>
          <div className="container">
            <span className="personIcon">
              <i class="fa fa-user"></i>
            </span>
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
              value="Submit"
              styleit={{
                background: "#00acb8",
                marginRight: "10px",
              }}
              onClick={() => {
                setToggle(false);
                if (textVal) {
                  addNotes(textVal);
                }
                setTextVal("");
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
      {/* /////////// */}
      {!toggle && !onlyWrite && (
        <div className="editModeContainer">
          <p>{each.name}</p>
          <div
            className="threedot"
            onClick={() => {
              setShowEditDel(!showEditDel);
            }}
          >
            <span>...</span>
            {showEditDel && (
              <div className="insideDot">
                <div className="editBtn" onClick={() => setToggle(!toggle)}>
                  <span style={{ paddingRight: "10px" }}>
                    <i class="fa fa-edit"></i>
                  </span>
                  Edit
                </div>
                <div className="deleteBtn">
                  <span style={{ paddingRight: "10px" }}>
                    <i class="fa fa-trash"></i>
                  </span>
                  Delete
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default EditMode;
