import React, { useState } from "react";
import AmazingNumberButton from "./AmazingNumberButton";
import BeautifullScreen from "./BeautifullScreen";
import GreatOperationButton from "./GreatOperationButton";
import ItSOverNineThousand from "./ItSOverNineThousand";
import MagnificientEqualButton from "./MagnificientEqualButton";
import TheTilte from "./TheTitle";

const Calculator = () => {
  const [stock, setStock] = useState("");
  const [egal, setEgal] = useState("");

  const getId = function (e) {
    setStock(stock + e.target.id);
  };

  const resulat = function () {
    setEgal(eval(stock));
  };
  return (
    <div className="calculator input">
      <div className="buttons">
        <TheTilte />
        <BeautifullScreen affichage={stock} total={egal} />
        <ItSOverNineThousand total={egal} />
        <GreatOperationButton number={getId} />
        <AmazingNumberButton number={getId} />{" "}
        <MagnificientEqualButton total={resulat} />
      </div>
    </div>
  );
};

export default Calculator;
