const logo = () => {
  //logo gets automatically rendered using css
  return React.createElement("h1");
};

const Pet = ({ name, breed, animal }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", { key: 5 }, name),
    React.createElement("h2", { key: 6 }, animal),
    React.createElement("h3", { key: 7 }, breed),
  ]);
};

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

ReactDOM.render(React.createElement(App), document.getElementById("root"));
