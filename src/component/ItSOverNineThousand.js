import React from "react";

const ItSOverNineThousand = ({ total }) => {
  if (total > 9000) {
    return (
      <div className="textClac">
        <h3>plus grand que 9000 achetes une nouvelle Calculatrice lol </h3>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default ItSOverNineThousand;
