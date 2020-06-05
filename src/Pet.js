import React from "react";
const Pet = ({ name, breed, animal }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", { key: 5 }, name),
    React.createElement("h2", { key: 6 }, animal),
    React.createElement("h3", { key: 7 }, breed),
  ]);
};

export default Pet;
