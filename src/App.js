import React from "react";
import { render } from "react-dom";
import logo from "./logo";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement(logo, { key: 1 }),
    React.createElement(Pet, {
      key: 2,
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),

    React.createElement(Pet, {
      key: 3,
      name: "pepper",
      animal: "Bird",
      breed: "Cockatiel",
    }),

    React.createElement(Pet, {
      key: 4,
      name: "Doink",
      animal: "Cat",
      breed: "Mixed",
    }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
