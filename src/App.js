import React, { useState } from "react";
import "./App.css";
//import Notes from "./Component/Notes";
import EditMode from "./Component/EditMode";
function App() {
  const [textVal, setTextVal] = useState("");

  const [data, setData] = useState([
    { name: "priynka", id: "1" },
    { name: "Anil", id: "2" },
    { name: "priya", id: "3" },
  ]);
  console.log("App -> data", data);
  return (
    <div className="App">
      <h2>Write Notes</h2>

      <EditMode onlyWrite />
      {data.map((each, index) => {
        return (
          <EditMode
            key={index}
            each={each}
            data={data}
            setData={setData}
            onlyWrite={false}
            textVal={textVal}
            setTextVal={setTextVal}
          />
        );
      })}
      {/* <Notes /> */}
    </div>
  );
}

export default App;
