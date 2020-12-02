import React from "react";
import logo from "../assets/img/coche.png";
import * as ReactBootstrap from "react-bootstrap";

const Repair = () => {
  return (
    <div>
      <br />
      <h1>
        <ReactBootstrap.Card style={{ width: "100%" }}>
          <ReactBootstrap.Card.Img
            style={{ width: "30%" }}
            variant="top"
            src={logo}
          />
          <ReactBootstrap.Card.Body>
            <ReactBootstrap.Card.Title>
              <h1>Estado: En Reparacion</h1>
            </ReactBootstrap.Card.Title>
            <ReactBootstrap.Card.Text>
              <h5>Matricula:</h5>
              <h5>Marca:</h5>
              <h5>Modelo:</h5>
              <h5>Color:</h5>
              <h3>Propietario</h3>
              <h5>Nombre:</h5>
              <h5>Apellido:</h5>
              <h5>Celular:</h5>
              <br />
              <h3>Partes:</h3>

              <h6>Parte1</h6>
              <h6>Costo</h6>
              <h3>Costo Total:</h3>
            </ReactBootstrap.Card.Text>
          </ReactBootstrap.Card.Body>
        </ReactBootstrap.Card>
      </h1>
    </div>
  );
};

export default Repair;
