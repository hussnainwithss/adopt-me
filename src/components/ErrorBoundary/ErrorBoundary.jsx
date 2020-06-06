// mostly code from reactjs.org/docs/error-boundaries.html

import React, { Component } from "react";
import { Link } from "@reach/router";
import sadkitty from "../Details/kitty.png";

class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error.", error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="details">
          <img src={sadkitty} alt="sad-kitty" />
          <h1>
            There was an error. <link to="/">Click here!</link> to go back to
            home page or wait 5 seconds for redirection.
          </h1>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
