import React from "react";

const GreatOperationButton = ({ number }) => {
  return (
    <div className="buttons">
      <div className="calc-button">
        <div className="calculator-buttons">
          <button onClick={number} id="+">
            +
          </button>
          <button onClick={number} id="-">
            -
          </button>
          <button onClick={number} id="*">
            *
          </button>
          <button onClick={number} id="/">
            /
          </button>
          {/* <button onClick={delete}>DEL</button> */}
        </div>
      </div>
    </div>
  );
};

export default GreatOperationButton;
