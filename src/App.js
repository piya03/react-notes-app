import React from "react";
import "./App.css";
import Notes from "./Component/Notes";
function App() {
  return (
    <div className="App">
      <h2>Write Notes</h2>
      <Notes onlyWrite />
      <Notes />
    </div>
  );
}

export default App;
