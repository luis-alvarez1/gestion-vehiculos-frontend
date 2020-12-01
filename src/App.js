import "./App.css";

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Owner from "./components/Owner";
import Owners from "./components/Owners";
import Profile from "./components/Profile";
import Repair from "./components/Repair";
import Repairs from "./components/Repairs";
import Vehicle from "./components/Vehicle";
import Vehicles from "./components/Vehicles";

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

          <Route path="/Owner">
            <Owner />
          </Route>

          <Route path="/Owners">
            <Owners />
          </Route>

          <Route path="/Profile">
            <Profile />
          </Route>

          <Route path="/Repair">
            <Repair />
          </Route>

          <Route path="/Repairs">
            <Repairs />
          </Route>

          <Route path="/Vehicle">
            <Vehicle />
          </Route>

          <Route path="/Vehicles">
            <Vehicles />
          </Route>
        </switch>
      </div>
    </Router>
  );
}

export default App;
