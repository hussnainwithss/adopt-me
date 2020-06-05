import React from "react";
const Pet = ({ name, breed, animal }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{animal}</h2>
      <h3>{breed}</h3>
    </div>
  );
  // return React.createElement("div", {}, [
  //   React.createElement("h1", { key: 5 }, name),
  //   React.createElement("h2", { key: 6 }, animal),
  //   React.createElement("h3", { key: 7 }, breed),
  // ]);
};

export default Pet;
