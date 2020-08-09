import React, { useState } from "react";
import CommonButton from "./CommonButton";

import "../App.css";

function EditMode({
  each,
  data,
  setData,
  onlyWrite,
  addNotes,
  deleteFun,
  updateFun,
  index,
}) {
  console.log("index", index);
  //const [text, setText] = useState(each?.name);
  const [textVal, setTextVal] = useState(each?.name || "");
  console.log("EditMode -> textVal", textVal);

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
              <i className="fa fa-user"></i>
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
              value={onlyWrite ? "Submit" : "Update"}
              styleit={{
                background: "#00acb8",
                marginRight: "10px",
              }}
              onClick={() => {
                setToggle(false);
                if (textVal && onlyWrite) {
                  addNotes(textVal);
                  // setData([...data, { name: textVal, id: Math.random() }]);
                }
                setTextVal("");
                if (!onlyWrite) {
                  updateFun(textVal, index);
                }
              }}
            />

            <CommonButton
              onClick={() => setTextVal("")}
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
          <div className="iconBox">
            <span className="personIcon">
              <i className="fa fa-user"></i>
            </span>
            <p style={{ textAlign: "left" }}>{each.name}</p>
          </div>
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
                    <i className="fa fa-edit"></i>
                  </span>
                  Edit
                </div>
                <div className="deleteBtn" onClick={() => deleteFun(index)}>
                  <span style={{ paddingRight: "10px" }}>
                    <i className="fa fa-trash"></i>
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
