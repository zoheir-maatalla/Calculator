import React from "react";

const MagnificientEqualButton = ({ total }) => {
  return (
    <div className="calculator input">
      <div className="calc-button">
        <div className="calculator-buttons">
          <button onClick={total} id="=">
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default MagnificientEqualButton;
