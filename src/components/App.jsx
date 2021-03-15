import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Workout from "./Workout";
import Finish from "./Finish";
import { Router, Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { createBrowserHistory } from "history";


const useStyles = makeStyles( theme => ({
  page: {
    // default
    margin: "0 6%",
    [theme.breakpoints.up("sm")]: {
      margin: "0 12%",
    },
    [theme.breakpoints.up("lg")]: {
      margin: "0 20%",
    },
  },
}));


function App() {
  const classes = useStyles();
  const history = createBrowserHistory();
  return (
    <div className={classes.page}>
      <Router history={history}>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/workout" exact component={Workout} />
          <Route path="/finish" exact component={Finish} />
        </Switch>
        <Footer classes={classes}/>
      </Router>
    </div>
  );
}

export default App;
