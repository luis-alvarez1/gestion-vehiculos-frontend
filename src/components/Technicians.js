import React from "react";
import logo from "../assets/img/tecnico.png";
import * as ReactBootstrap from "react-bootstrap";

const Owners = () => {
  return (
    <div>
      <br />
      <ReactBootstrap.CardGroup style={{ width: "30%" }}>
        <ReactBootstrap.Card style={{ margin: "10px" }}>
          <ReactBootstrap.Card.Img variant="top" src={logo} />
          <ReactBootstrap.Card.Body>
            <ReactBootstrap.Card.Text>
              <p>Nombre:</p>
              <p>Apellido:</p>
              <p>Email:</p>
              <p>Celular:</p>
            </ReactBootstrap.Card.Text>
            <ReactBootstrap.Button variant="primary" href="/Technician">
              see more...
            </ReactBootstrap.Button>
          </ReactBootstrap.Card.Body>
        </ReactBootstrap.Card>

        <ReactBootstrap.Card style={{ margin: "10px" }}>
          <ReactBootstrap.Card.Img variant="top" src={logo} />
          <ReactBootstrap.Card.Body>
            <ReactBootstrap.Card.Text>
              <p>Nombre:</p>
              <p>Apellido:</p>
              <p>Email:</p>
              <p>Celular:</p>
            </ReactBootstrap.Card.Text>
            <ReactBootstrap.Button variant="primary" href="/Technician">
              see more...
            </ReactBootstrap.Button>
          </ReactBootstrap.Card.Body>
        </ReactBootstrap.Card>
      </ReactBootstrap.CardGroup>
    </div>
  );
};

export default Owners;
