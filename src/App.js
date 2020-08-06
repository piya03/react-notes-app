import React from "react";
import "./App.css";
import Notes from "./Component/Notes";
import EditMode from "./Component/EditMode";
function App() {
  return (
    <div className="App">
      <h2>Write Notes</h2>

      <Notes onlyWrite />
      <EditMode onlyWrite={false} />
      {/* <Notes /> */}
    </div>
  );
}

export default App;
