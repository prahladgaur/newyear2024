/* eslint-disable no-const-assign */
/* eslint-disable react/no-unescaped-entities */
// import React from 'react'
import { useState } from "react";
function Thala() {
  const [inputValue, setInputValue] = useState("");
  const [submittedValue, setSubmittedValue] = useState("");
  const [logic, setLogic] = useState("");
  
  var toggle = true
  function handleLog() {
    if(toggle){
      setLogic("string length = 7 or digit sum = 7");
      toggle = false
    }
    else{
      setLogic("");
      toggle = true
    }
  }

  function handleSub(event) {
    event.preventDefault();
    setInputValue(inputValue);

    if (Number(inputValue)) {
      Number(inputValue);
      var value = inputValue;
      var sum = 0;
      while (value) {
        sum += value % 10;
        value = Math.floor(value / 10);
      }

      if (sum == 7) {
        setSubmittedValue("Thala for a reason");
      } else {
        setSubmittedValue("No Thala for You");
      }
    } else {
      if (inputValue.length == 7) {
        setSubmittedValue("Thala for a reason");
      } else {
        setSubmittedValue("No Thala for You");
      }
    }
  }

  const handleinputChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <>
      <div className="thalaset">
        
        <form onSubmit={handleSub}>
          <p>Thala for a reason Game</p>
          <p className="enter">Enter Something</p>
          <input
            type="text"
            value={inputValue}
            onChange={handleinputChange}
            placeholder="enter something"
          />
          <button type="submit">Submit</button>
          <p> '{submittedValue}' </p>
          <p className="enter" onClick={handleLog}>
            Thala Logic
          </p>
          <a href="https://www.ndtv.com/offbeat/thala-for-a-reason-google-pays-tribute-to-ms-dhoni-with-number-7-4661840" rel="noreferrer" target="_blank">
            What is Thala?
          </a>
          <p>{logic}</p>
        </form>
      </div>
    </>
  );
}

export default Thala;
