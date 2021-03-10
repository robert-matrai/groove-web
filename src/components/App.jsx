import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Workout from "./Workout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/workout" exact component={Workout} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
