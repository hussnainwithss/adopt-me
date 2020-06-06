import React from "react";

import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import Logo from "./components/Logo/Logo.jsx";
import Search from "./components/Search/Search.jsx";
import Details from "./components/Details/Details.jsx";
import "babel-polyfill"; //transpiles Modern JS functions like async etc. for incompatible borwsers

const App = () => {
  return (
    <React.StrictMode>
      <div>
        <Logo />
        <Router>
          <Search path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
