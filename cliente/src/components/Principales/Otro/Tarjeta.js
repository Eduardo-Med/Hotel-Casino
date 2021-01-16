import React from "react";

export default function Tarjeta({titulo,precio}) {
  return (
    <div className="card border-succeess mt-5" style={{ maxWidth: "20rem" }}>
      <div className="card-body">
        <div className="titulo-tarjeta">
            <h2>{titulo}</h2>
        </div>
        <div className="precio">
            <h4><strong>${precio}</strong></h4>
            <h5>Por noche</h5>
        </div>
      </div>
      <div className="card-header"> <a className="text-white text-decoration-none" href="https://www.reservaciones.app/"><button className="btn btn-success btn-block btn-lg">Reservar</button></a></div>
    </div>
  );
}
