import React, {useState} from "react";
import axios from "axios";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Dallas</p>
          </div>
          
          <div className="temp">
            <h1>60F</h1>
          </div>
          
          <div className="description">
            <p>Clouds</p>
          </div>
          <div className="bottom"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
