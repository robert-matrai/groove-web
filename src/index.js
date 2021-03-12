import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: "Helvetica",
  },
  palette: {
    text: {
      primary: "#efecec",
      secondary: "#bbe1fa",
      footer: "#ccc",
    },
    button: {
      active: "#0f4c75",
      hover: "#3282b8",
    },
    textField: {
      button: {
        active: "#3282b8",
        hover: "#bbe1fa",
        activeFilter: "invert(48%) sepia(9%) saturate(3350%) hue-rotate(161deg) brightness(92%) contrast(87%)", // use https://codepen.io/sosuke/pen/Pjoqqp to compute
      },
      outline: "#3282b8",
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
