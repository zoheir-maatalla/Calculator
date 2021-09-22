import React from "react";
const BeautifullScreen = ({ affichage, total }) => {
  return (
    <div className="calculator input">
      <div className="calc-button">
        <p>{affichage}</p>
        <p>{total}</p>
      </div>
    </div>
  );
};

export default BeautifullScreen;
