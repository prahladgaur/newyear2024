// import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import audiobg from "../assets/hny.mp3"

function Home() {
  const [inputValue, setInputValue] = useState("Thala");
  const [submittedValue, setSubmittedValue] = useState("");
  const navigate = useNavigate();

  const handleButton = (event) => {
    event.preventDefault();
    setSubmittedValue(inputValue);
    const inputval = inputValue;
    navigate("/player", { state: { id: inputval } });
  };

  const handleinputChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <>
      <div className="hom">
        <div className="form-data">
          <div className="enter-name">Enter Your Name</div>
          <form onSubmit={handleButton}>
            <input
              type="text"
              value={inputValue}
              onChange={handleinputChange}
              placeholder="TYPE YOUR NAME"
            ></input>
            <br />

            <button className="submit-btn" type="submit">Submit </button>

            {submittedValue && (
              <div>
                <p>{submittedValue}</p>
              </div>
            )}
          </form>
        </div>
       
      </div>
      <audio src={audiobg} controls autoPlay loop />
    </>
  );
}

export default Home;
