import React from "react";

import { render } from "react-dom";
import { Router } from "@reach/router";
import Logo from "./components/Logo/Logo.jsx";
import Search from "./components/Search/Search.jsx";
import Details from "./components/Details/Details.jsx";
import "babel-polyfill";

const App = () => {
  return (
    <div>
      <Logo />
      <Router>
        <Details path="/details/:id" />

        <Search path="/" />
      </Router>
    </div>
  );
};

render(<App />, document.getElementById("root"));
