import "./App.css";

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import * as ReactBootstrap from "react-bootstrap";
import Home from "./components/Home";
import Owner from "./components/Owner";
import Technicians from "./components/Technicians";
import Technician from "./components/Technician";
import Profile from "./components/Profile";
import Repair from "./components/Repair";
import Repairs from "./components/Repairs";
import Vehicle from "./components/Vehicle";
import Vehicles from "./components/Vehicles";

function App() {
  return (
    <Router>
      <div className="App">
        <ReactBootstrap.Navbar bg="dark" expand="lg" variant="dark">
          <ReactBootstrap.Navbar.Brand href="/">
            Gestion Vehicular
          </ReactBootstrap.Navbar.Brand>
          <ReactBootstrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
          <ReactBootstrap.Navbar.Collapse id="basic-navbar-nav">
            <ReactBootstrap.Nav className="mr-auto">
              <ReactBootstrap.Nav.Link href="/">Inicio</ReactBootstrap.Nav.Link>
              <ReactBootstrap.Nav.Link href="/Technicians">
                Tecnicos
              </ReactBootstrap.Nav.Link>
              <ReactBootstrap.Nav.Link href="/Vehicles">
                Vehiculos
              </ReactBootstrap.Nav.Link>
              <ReactBootstrap.Nav.Link href="/Profile">
                Profile
              </ReactBootstrap.Nav.Link>
            </ReactBootstrap.Nav>
            <ReactBootstrap.Form inline>
              <ReactBootstrap.FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <ReactBootstrap.Button variant="outline-primary">
                Buscar
              </ReactBootstrap.Button>
            </ReactBootstrap.Form>
          </ReactBootstrap.Navbar.Collapse>
        </ReactBootstrap.Navbar>
        <switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/Owner">
            <Owner />
          </Route>

          <Route path="/Technicians">
            <Technicians />
          </Route>

          <Route path="/Technician">
            <Technician />
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
