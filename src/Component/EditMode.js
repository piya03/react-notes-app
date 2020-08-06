import React, { useState } from "react";
import CommonButton from "./CommonButton";

import "../App.css";

function EditMode() {
  const [showEditDel, setShowEditDel] = useState(false);
  const [toggle, setToggle] = useState(false);
  console.log("EditMode -> toggle", toggle);
  return (
    <React.Fragment>
      {/* ////// */}

      {toggle && (
        <div style={{ marginTop: "15px" }}>
          <div className="container">
            <textarea
              // value={textVal}
              onChange={(e) => {
                // setTextVal(e.target.value);
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
      {!toggle && (
        <div className="editModeContainer">
          <p> fg</p>
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
