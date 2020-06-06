// mostly code from reactjs.org/docs/error-boundaries.html

import React, { Component } from "react";
import { Link, navigate } from "@reach/router";
import ThemeContext from "../ThemeContext/ThemeContext.js";

import sadkitty from "../Details/kitty.png"; //from favicons

class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error.", error, info);
  }

  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => navigate("/"), 5000);
    }
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="details">
          <ThemeContext.Consumer>
            {([theme]) => (
              <div>
                <img src={sadkitty} alt="sad-kitty" className="sadkitty" />
                <h2 style={{ color: theme.warningColor }}>
                  There was an error
                </h2>
                <h2>
                  <Link to="/" style={{ color: theme.warningColor }}>
                    Click here!
                  </Link>{" "}
                  to go back to home page or{" "}
                  <span style={{ color: theme.warningColor }}>
                    wait 5 seconds
                  </span>{" "}
                  for redirection.
                </h2>
              </div>
            )}
          </ThemeContext.Consumer>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
