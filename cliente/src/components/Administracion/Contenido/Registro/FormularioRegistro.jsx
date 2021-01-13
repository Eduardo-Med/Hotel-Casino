import React, {useState,useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchRegistro from "../../../../redux/actions/registroAction";

export default function FormularioRegistro({noReservacion}) {
  const dispatch = useDispatch();
  const reservacion = useSelector((state) => state.reservacion.reservacion[0]);
  const [datos,setDatos] = useState({info: reservacion,num: noReservacion,precio:0})


  useEffect(() => {
    setDatos({
      reservacion,
      noReservacion,
      precio: reservacion ? reservacion.reservation.total : 0
    })
    // eslint-disable-next-line
  }, [reservacion])


  return (
    <div className="informacion formulario">
      <div className="input-contenido">
        <label htmlFor="">Nombre Cliente</label>
        <input
          className="form-control"
          required="required"
          autoComplete="off"
          type="text"
          tabIndex="-1"
          placeholder="Nombre"
          defaultValue={reservacion ? `${reservacion.user.name} ${reservacion.user.paternalSurname} ${reservacion.user.maternalSurname}`: ""}
        />
      </div>
      <div className="input-contenido">
        <label htmlFor="">Correo</label>
        <input
          className="form-control"
          required="required"
          autoComplete="off"
          type="text"
          tabIndex="-1"
          placeholder="Correo"
          defaultValue={reservacion ? reservacion.user.email : ""}
        />
        <label htmlFor="">Telefono</label>
        <input
          className="form-control"
          required="required"
          maxLength="14"
          autoComplete="off"
          type="tel"
          tabIndex="-1"
          placeholder="Telefono"
          defaultValue={reservacion ? reservacion.user.phone : ""}
        />
      </div>
      <div className="input-contenido">
        <label htmlFor="">Inicio de Estadia</label>
        <input
          className="form-control"
          type="date"
          tabIndex="-1"
          placeholder="Fecha de Inicio"
          defaultValue={reservacion ? reservacion.reservation.entryDate.substr(0,10) : ""}
        />
        <label htmlFor="">Fin de Estadia</label>
        <input
          className="form-control"
          type="date"
          tabIndex="-1"
          placeholder="Fecha de Salida"
          defaultValue={reservacion ? reservacion.reservation.leavingDate.substr(0,10) : ""}
        />
      </div>
      <div className="input-contenido">
        <label htmlFor="">Numero de Habitaciones Sencillas</label>
        <input
          className="form-control"
          type="number"
          required="required"
          maxLength="2"
          tabIndex="-1"
          autoComplete="off"
          placeholder="Sencilla"
          defaultValue={reservacion ? reservacion.reservation.rooms.simple : ""}
        />
        <label htmlFor="">Numero de Habitaciones Dobles</label>
        <input
          className="form-control"
          type="number"
          required="required"
          maxLength="2"
          tabIndex="-1"
          autoComplete="off"
          placeholder="Doble"
          defaultValue={reservacion ? reservacion.reservation.rooms.double : ""}
        />
        <label htmlFor="">Numero de Habitaciones Matrimoniales</label>
        <input
          className="form-control"
          type="number"
          required="required"
          tabIndex="-1"
          maxLength="2"
          autoComplete="off"
          placeholder="Matrimoniales"
          defaultValue={reservacion ? reservacion.reservation.rooms.master  : ""}
        />
        <label htmlFor="">Numero de Habitaciones Suit</label>
        <input
          className="form-control"
          type="number"
          required="required"
          maxLength="2"
          tabIndex="-1"
          autoComplete="off"
          placeholder="Suit"
          defaultValue={reservacion ? reservacion.reservation.rooms.suite  : ""}
        />
      </div>
      <div className="boton-registrar">
        <button
          className="btn btn-success"
          onClick={() => dispatch(fetchRegistro(datos))}
          disabled={reservacion ? false : true}
        >
          Registrar
        </button>
      </div>
    </div>
  );
}
