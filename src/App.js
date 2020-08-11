import React, { useState } from "react";
import "./App.css";
//import Notes from "./Component/Notes";
import EditMode from "./Component/EditMode";
function App() {
  const [data, setData] = useState([]);

  function addNotes(textValue) {
    setData([...data, { name: textValue, id: Math.random() }]);
  }

  function deleteFun(index) {
    data.splice(index, 1);
    setData([...data]);
  }

  function updateFun(textValue, index) {
    data[index] = { ...data[index], name: textValue };
    setData([...data]);
  }
  console.log("App -> data", data);
  return (
    <div className="App">
      <h2>Write Notes</h2>

      <EditMode onlyWrite addNotes={addNotes} />
      {data.map((each, index) => {
        return (
          <EditMode
            index={index}
            key={index}
            each={each}
            data={data}
            setData={setData}
            deleteFun={deleteFun}
            updateFun={updateFun}
            onlyWrite={false}
          />
        );
      })}
      {/* <Notes /> */}
    </div>
  );
}

export default App;
