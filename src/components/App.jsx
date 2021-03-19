import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Workout from "./Workout";
import Finish from "./Finish";
import { Router, Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { createBrowserHistory } from "history";

const useStyles = makeStyles((theme) => ({
  page: {
    margin: "0 auto",
    width: "380px",
    [theme.breakpoints.up("sm")]: {
      width: `${theme.breakpoints.pageWidth}px`,
      margin: "0 auto",
    },
  },
}));

function App(props) {
  const classes = useStyles();
  const history = createBrowserHistory();
  return (
    <>
      <div className={classes.page}>
        <Router history={history}>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/workout" exact component={Workout} />
            <Route path="/finish" exact component={Finish} />
          </Switch>
        </Router>
      </div>

      <Footer classes={classes} />
    </>
  );
}

export default App;
