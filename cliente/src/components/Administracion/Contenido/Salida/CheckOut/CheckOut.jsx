import React, { useState } from "react";
import axios from 'axios'
import "./checkout.css";
import DatosPago from "./DatosPago";
import {alertaSinActualizar} from '../../../../../middleware/alertas'
import { useDispatch } from "react-redux";
import fetchHabitacion from "../../../../../redux/actions/habitacionAction";

const base_url = process.env.REACT_APP_API_HOTEL

export default function CheckOut({ volver, informacion, total, habitacionNumero, consumos }) {
  const [mostrarContenidoPago, setMostrarContenidoPago] = useState(false);
  const dispatch = useDispatch()

  const liberarCuarto =()=>{
    axios.delete(`${base_url}/checkOut/${habitacionNumero}`)
    .then((result) =>{
      dispatch(fetchHabitacion())
      axios.delete(`https://www.reservaciones.app/api/reservation/${informacion.noReservacion}`)
      axios.delete(`https://hotel-casino-backend.herokuapp.com/api/reservacion/borrar/${informacion.noReservacion}`)  
      alertaSinActualizar('Cuarto Liberado', 'Liberacion del cuarto correcta', 'success', 'Aceptar')
    })
    .catch((error) => {
      alertaSinActualizar('A ocurrido un error', 'Error al liberar el cuarto intentelo de nuevo', 'error', 'Aceptar')
    })
  }



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
          {
          total > 0 ?
          <button
            className="btn btn-success"
            onClick={() => setMostrarContenidoPago(!mostrarContenidoPago)}
          >
            Pasar a pago
          </button>
          :
          <button
          className="btn btn-success"
          onClick={() => liberarCuarto()}
          >
            Liberar Habitacion
          </button>
          }
        </div>
      </div>
      <DatosPago
        mostrar={mostrarContenidoPago}
        cancelar={() => setMostrarContenidoPago(!mostrarContenidoPago)}
        habitacionNumero = {habitacionNumero}
        monto = {total}
        consumos={consumos}
        informacion={informacion}
      />
    </div>
  );
}
