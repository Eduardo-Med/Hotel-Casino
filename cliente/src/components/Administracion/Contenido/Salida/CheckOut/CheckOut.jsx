import React, { useState } from "react";
import "./checkout.css";
import DatosPago from "./DatosPago";

export default function CheckOut({ volver, informacion, total, habitacionNumero }) {
  const [mostrarContenidoPago, setMostrarContenidoPago] = useState(false);
  return (
    <div>
      <div className={`check-out formulario`}>
        <div className="input-contenido">
          <label htmlFor="">No. Reservacion</label>
          <input
            className="form-control"
            type="text"
            placeholder="Numero de reservacion"
            defaultValue={informacion ? informacion.noReservacion : ''}
          />
        </div>
        <div className="input-contenido">
          <label htmlFor="">Nombre Cliente</label>
          <input
            className="form-control"
            type="text"
            placeholder="Nombre Cliente"
            defaultValue={informacion ? informacion.nombre : ''}
          />
        </div>
        <div className="input-contenido">
          <label htmlFor="">Fecha de inicio de estadia</label>
          <input
            className="form-control"
            type="text"
            placeholder="Fecha de inicio de estadia"
            defaultValue={informacion ? informacion.fechaEntrada.substr(0,10) : ''}
          />
        </div>
        <div className="input-contenido">
          <label htmlFor="">Fecha de fin de estadia</label>
          <input
            className="form-control"
            type="text"
            placeholder="Fecha de fin de estadia"
            defaultValue={informacion ? informacion.fechaSalida.substr(0,10) : ''}
          />
        </div>
        <div className="input-contenido">
          <label htmlFor="">Adeudo a cobrar</label>
          <input
            className="form-control"
            type="text"
            placeholder="Adeudo a cobrar"
            defaultValue={total}
          />
        </div>
        <div
          className={`input-contenido botones-check ${
            mostrarContenidoPago ? "d-none" : ""
          }`}
        >
          <button className="btn btn-danger" onClick={() => volver()}>
            Cancelar
          </button>
          <button
            className="btn btn-success"
            onClick={() => setMostrarContenidoPago(!mostrarContenidoPago)}
          >
            Pasar a pago
          </button>
        </div>
      </div>
      <DatosPago
        mostrar={mostrarContenidoPago}
        cancelar={() => setMostrarContenidoPago(!mostrarContenidoPago)}
        habitacionNumero = {habitacionNumero}
        monto = {total}
      />
    </div>
  );
}
