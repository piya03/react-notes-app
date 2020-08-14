import React, { useState, useEffect, useRef } from "react";
import "./App.css";
//import Notes from "./Component/Notes";
import EditMode from "./Component/EditMode";

function App() {
  const [data, setData] = useState([]);
  const scrollContainer = useRef(null);
  console.log("App -> scrollContainer", scrollContainer);
  // if (forScrollRef.current) {
  //   forScrollRef.current.scroll({
  //     top: 2000,
  //     behavior: 'smooth'
  //   });
  // }

  useEffect(() => {
    if (scrollContainer.current) {
      setTimeout(() => {
        scrollContainer.current.scroll({
          top: 2000,
          behavior: "smooth",
        });
      }, 200);
    }
  }, [data.length]);

  //messageBody.scrollTop = messageBody.scrollHeight - messageBody.clientHeight;
  // useEffect(() => {
  //   scrollContainer.scrollTop =
  //     scrollContainer.scrollHeight - scrollContainer.clientHeight;
  // });
  function addNotes(textValue) {
    setData([...data, { name: textValue, id: Math.random() }]);
  }

  function deleteFun(index) {
    data.splice(index, 1);
    setData([...data]);
  }

  function updateFun(textValue, index) {
    data[index] = { ...data[index], name: textValue };
    console.log("updateFun -> data checking before", data);
    console.log("updateFun -> data[index]", data[index]);

    setData([...data]);
    console.log("updateFun -> data checking after", data);
  }

  console.log("App -> data", data);
  return (
    <div className="App">
      <h2>Write Notes</h2>

      <EditMode onlyWrite addNotes={addNotes} />
      <div className="overflowContainer" ref={scrollContainer}>
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
      </div>
      {/* <Notes /> */}
    </div>
  );
}

export default App;
