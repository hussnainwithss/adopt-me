import React from "react";
import { render } from "react-dom";
import Logo from "./components/Logo/Logo.jsx";
import Search from "./components/Search/Search.jsx";
import "babel-polyfill";

const App = () => {
  return (
    <div>
      <Logo />
      <Search />
    </div>
  );
};

render(<App />, document.getElementById("root"));
