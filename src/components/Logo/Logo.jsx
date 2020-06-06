import React from "react";
import { Router, Link } from "@reach/router";
const logo = () => {
  //logo gets automatically rendered using css
  return (
    <div>
      <header>
        <Link to="/">Adopt Me!</Link>
      </header>
    </div>
  );
};

export default logo;
