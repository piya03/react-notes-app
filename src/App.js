import React, { useState } from "react";
import "./App.css";
//import Notes from "./Component/Notes";
import EditMode from "./Component/EditMode";
function App() {
  const [data, setData] = useState([]);
  function addNotes(textValue) {
    console.log("addNotes -> addNotes");
    setData([...data, { name: textValue, id: Math.random() }]);
  }
  console.log("App -> data", data);
  return (
    <div className="App">
      <h2>Write Notes</h2>

      <EditMode onlyWrite addNotes={addNotes} />
      {data.map((each, index) => {
        return (
          <EditMode
            key={index}
            each={each}
            data={data}
            setData={setData}
            onlyWrite={false}
          />
        );
      })}
      {/* <Notes /> */}
    </div>
  );
}

export default App;
