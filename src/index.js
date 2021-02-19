import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
    typography: {
        fontFamily: "Helvetica"
    }
})

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
