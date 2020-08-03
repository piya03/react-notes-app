import React, { useState } from "react";
import "../App.css";

function EditMode({ setShowEdit }) {
  const [showEditDel, setShowEditDel] = useState(false);
  console.log("EditMode -> showEditDel", showEditDel);
  return (
    <div className="editModeContainer">
      <p> you can also edit this one</p>
      <div
        className="threedot"
        onClick={() => {
          setShowEdit(true);
          setShowEditDel(!showEditDel);
        }}
      >
        {" "}
        <span>...</span>
        {showEditDel && (
          <div className="insideDot">
            <div>Edit</div>
            <div>Delete</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default EditMode;
