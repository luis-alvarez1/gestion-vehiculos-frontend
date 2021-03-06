import React from "react";
import logo from "../assets/img/coche.png";
import * as ReactBootstrap from "react-bootstrap";

const Vehicles = () => {
  return (
    <div>
      <ReactBootstrap.CardGroup style={{ width: "30%" }}>
        <ReactBootstrap.Card style={{ margin: "10px" }}>
          <ReactBootstrap.Card.Img variant="top" src={logo} />
          <ReactBootstrap.Card.Body>
            <ReactBootstrap.Card.Text>
              <p>Matricula:</p>
              <p>Estado:</p>
            </ReactBootstrap.Card.Text>
            <ReactBootstrap.Button variant="primary" href="/Repair">
              see more...
            </ReactBootstrap.Button>
          </ReactBootstrap.Card.Body>
        </ReactBootstrap.Card>

        <ReactBootstrap.Card style={{ margin: "10px" }}>
          <ReactBootstrap.Card.Img variant="top" src={logo} />
          <ReactBootstrap.Card.Body>
            <ReactBootstrap.Card.Text>
              <p>Matricula:</p>
              <p>Estado:</p>
            </ReactBootstrap.Card.Text>
            <ReactBootstrap.Button variant="primary" href="/Repair">
              see more...
            </ReactBootstrap.Button>
          </ReactBootstrap.Card.Body>
        </ReactBootstrap.Card>
      </ReactBootstrap.CardGroup>
    </div>
  );
};

export default Vehicles;
