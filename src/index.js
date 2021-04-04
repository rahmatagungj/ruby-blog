import React, { Component, Suspense } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { lazy } from "@loadable/component";

const Home = lazy(() => import("./components/Home"));
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Suspense
            fallback={
              <div className="downloader">
                <center>Halaman sedang dimuat ...</center>
              </div>
            }
          >
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
          </Suspense>
        </Router>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
