import React, { useState, useEffect } from "react";
import "../App.css";

function CommonButton({ value, onClick, styleit = {} }) {
  return (
    <div className="">
      <button className="btn" onClick={onClick} style={styleit}>
        {value}
      </button>
    </div>
  );
}

export default CommonButton;
