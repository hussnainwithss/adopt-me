import React, { useState } from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import Logo from "./components/Logo/Logo.jsx";
import Search from "./components/Search/Search.jsx";
import Details from "./components/Details/Details.jsx";
import ThemeContext from "./components/ThemeContext/ThemeContext.js";
import "babel-polyfill"; //transpiles Modern JS functions like async etc. for incompatible borwsers

const App = () => {
  // a color can be passed to this hook to apply
  // that color as default theme
  // i.e const themeHook = useState("peru");
  const themeHook = useState("");

  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <Logo />
          <Router>
            <Search path="/" />
            <Details path="/details/:id" />
          </Router>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
