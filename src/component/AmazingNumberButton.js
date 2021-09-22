import React from "react";

const AmazingNumberButton = ({ number }) => {
  return (
    <div className="buttons">
      <div className="calc-button">
        <div className="calculator-buttons">
          <button onClick={number} id="1">
            1
          </button>
          <button onClick={number} id="2">
            2
          </button>
          <button onClick={number} id="3">
            3
          </button>
          <button onClick={number} id="4">
            4
          </button>
          <button onClick={number} id="5">
            5
          </button>
          <button onClick={number} id="6">
            6
          </button>
          <button onClick={number} id="7">
            7
          </button>
          <button onClick={number} id="8">
            8
          </button>
          <button onClick={number} id="9">
            9
          </button>
          <button onClick={number} id=".">
            .
          </button>
          <button onClick={number} id="0">
            0
          </button>
          <button id="DEL">DEL</button>
        </div>
      </div>
    </div>
  );
};

export default AmazingNumberButton;
