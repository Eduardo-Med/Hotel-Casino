import React, { useState } from "react";
import { useSelector } from "react-redux";
import CheckOut from "../CheckOut/CheckOut";
import Actividades from "./Actividades";
import InfoCliente from "./InfoCliente";

export default function InfoHabitacion({ ocultarInfo, tipo }) {
  const [mostrarSalida, setMostrarSalida] = useState(false);
  const informacion = useSelector((state) => state.informacion.informacion[0]);
  return (
    <>
      {!mostrarSalida ? (
        <div className={`info-extendida mt-2 ${ocultarInfo ? "d-none" : ""}`}>
          <InfoCliente
            noReservacion={informacion ? informacion.noReservacion : ''}
            nombre={informacion ? informacion.nombre : ''}
            tipoHabitacion={tipo}
            fechaRegistro={informacion ? informacion.fechaInicio : ''}
            fechaSalida={informacion ? informacion.fechaSalida : ''}
            numeroPersonas={5}
          />
          <div className="registro-actividades">
            <h4>
              <strong>Registro de actividades</strong>
            </h4>
            <Actividades nombre={"Comida En Restaurante"} precio={240} />
            <Actividades nombre={"Comida En Restaurante"} precio={450} />
            <Actividades nombre={"Comida En Restaurante"} precio={650} />
            <Actividades nombre={"Comida En Restaurante"} precio={800} />
            <div className="total-pago">
              <strong>Total a pagar: </strong>$2180
            </div>
          </div>
          <div className="info-extendida-boton">
            <button
              className="btn btn-success"
              onClick={() => setMostrarSalida(!mostrarSalida)}
            >
              <strong>Realizar Check-out</strong>
            </button>
          </div>
        </div>
      ) : (
        <div className={`${ocultarInfo ? "d-none" : ""}`}>
          <div className="titulo-check text-center">
            <label>Check-Out</label>
          </div>
          <CheckOut volver={() => setMostrarSalida(!mostrarSalida)} />
        </div>
      )}
    </>
  );
}
