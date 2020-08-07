import React, { useState } from "react";
import CommonButton from "./CommonButton";

import "../App.css";

function EditMode({ each, textVal, setTextVal, data, setData, onlyWrite }) {
  const [text, setText] = useState(each?.name);
  const [showEditDel, setShowEditDel] = useState(false);
  const [toggle, setToggle] = useState(false);
  console.log("EditMode -> toggle", toggle);
  return (
    <React.Fragment>
      {/* ////// */}

      {(toggle || onlyWrite) && (
        <div style={{ marginTop: "15px" }}>
          <div className="container">
            <textarea
              value={text}
              onChange={(e) => {
                setText(e.target.value);
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
                setData([
                  ...data,
                  { name: text, id: Math.random().toString() },
                ]);
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
                <div
                  onClick={() => setToggle(!toggle)}
                  style={{ marginBottom: "5px" }}
                >
                  Edit
                </div>
                <div>Delete</div>
              </div>
            )}
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default EditMode;
