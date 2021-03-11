import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Workout from "./Workout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  page: {
    // margin: window.innerwidth > 960 ? "0 20%" : "0 5%",
    margin: "0 20%",
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.page}>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/workout" exact component={Workout} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
