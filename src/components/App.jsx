import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Workout from "./Workout";
import Finish from "./Finish";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { createBrowserHistory } from "history";


const useStyles = makeStyles({
  page: {
    // margin: window.innerwidth > 960 ? "0 20%" : "0 5%",
    margin: "0 20%",
  },
});


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
        <Footer />
      </Router>
    </div>
  );
}

export default App;
