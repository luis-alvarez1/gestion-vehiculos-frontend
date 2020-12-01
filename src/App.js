import "./App.css";

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Owner from "./components/Owner";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>APP RUNNING</h1>
        <hr />
        <switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/Owners">
            <Owner />
          </Route>
        </switch>
      </div>
    </Router>
  );
}

export default App;
