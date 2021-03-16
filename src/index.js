import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";


const pageMargin = 6;
const pageWidth = 700;
const customBreakpoint = Math.floor(pageWidth * (1 + (2 * pageMargin / 100)));

const theme = createMuiTheme({
  typography: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    brand: {
      fontSize: "1.3rem",
      fontWeight: "200",
    },
    title: {
      textAlign: "start",
      fontSize: "4rem",
      fontWeight: "300",
    },
    subTitle: {
      textAlign: "start",
      fontSize: "1rem",
      fontWeight: "200",
    },
    textField: {
      fontWeight: "400",
      fontSize: "1rem",
    },
    footer: {
      fontSize: "0.8rem",
      fontWeight: "200",
    }
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
        activeFilter:
          "invert(48%) sepia(9%) saturate(3350%) hue-rotate(161deg) brightness(92%) contrast(87%)", // use https://codepen.io/sosuke/pen/Pjoqqp to compute
      },
      outline: "#3282b8",
    },
  },
  breakpoints: {
    pageMargin: pageMargin,
    pageWidth: pageWidth,
    values: {
      sm: customBreakpoint, // should equal App/customBreakpoint
    }
  }
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
