import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Project from "./components/Project";
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/projek" component={Project} />
          </Switch>
        </Router>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
