import { createContext } from "react";

const ThemeContext = createContext([
  { buttonColor: "#ad343e", warningColor: "#c03440" },
  () => {},
]);

export default ThemeContext;
