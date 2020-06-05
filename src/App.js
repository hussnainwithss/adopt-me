import React from "react";
import { render } from "react-dom";
import Logo from "./components/Logo/Logo.jsx";
import Search from "./components/Search/Search.jsx";

const App = () => {
  return (
    <div>
      <Logo />
      <Search />
      {/* <Pet name={"Luna"} animal={"Dog"} breed={"Havanese"} />
      <Pet name={"Pepper"} animal={"Bird"} breed={"Cockatiel"} />
      <Pet name={"Doink"} animal={"Cat"} breed={"Mixed"} /> */}
    </div>
  );
};

render(<App />, document.getElementById("root"));
