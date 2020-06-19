import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import OnePage from "./page/pageOne/OnePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PageNotFound from "./common/PageNotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={OnePage} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
