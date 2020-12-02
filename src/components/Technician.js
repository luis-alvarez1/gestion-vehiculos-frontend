import React from "react";
import logo from "../assets/img/tecnico.png";
import logoCoche from "../assets/img/coche.png";
import * as ReactBootstrap from "react-bootstrap";

const Technician = () => {
  return (
    <div>
      <ReactBootstrap.Row>
        <ReactBootstrap.Col xs={6} md={4}>
          <ReactBootstrap.Image style={{ width: "100%" }} src={logo} rounded />
        </ReactBootstrap.Col>
        <ReactBootstrap.Col xs={6} md={4}>
          <br />
          <br />
          <br />
          <br />
          <h3>Nombre:</h3>
          <h3>Apellido:</h3>
          <h3>Email:</h3>
          <h3>Celular:</h3>
        </ReactBootstrap.Col>
      </ReactBootstrap.Row>
      <h1>Vehiculos:</h1>
      <ReactBootstrap.CardGroup style={{ width: "30%" }}>
        <ReactBootstrap.Card style={{ margin: "10px" }}>
          <ReactBootstrap.Card.Img variant="top" src={logoCoche} />
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
          <ReactBootstrap.Card.Img variant="top" src={logoCoche} />
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

export default Technician;
