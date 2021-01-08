import React from 'react'
import {alerta} from '../../../../middleware/alertas'
import {useDispatch, useSelector } from 'react-redux'
import fetchRegistro from '../../../../redux/actions/registroAction'



export default function FormularioRegistro() {
    const dispatch = useDispatch()
    const reservacion = useSelector((state) => state.reservacion.reservacion[0])
    const resultadoRegistro = useSelector((state) => state.registro)
    function registrar() {
        dispatch(fetchRegistro(reservacion))
        !resultadoRegistro.error ? alerta('Registro Correcto', 'Registro realizado correctamente', 'success', 'Aceptar') 
        : alerta('Registro Incorrecto', 'Ocurrio un error al realizar el registro', 'error', 'Aceptar') 
        console.log(!resultadoRegistro.error)
    }
 
    return (
        <div className="informacion formulario">
            <div className="input-contenido">
                <label htmlFor="">Nombre Cliente</label>
                <input className="form-control" type="text" placeholder="Nombre" defaultValue={reservacion ? reservacion.nombre : ''}/>
            </div>
            <div className="input-contenido">
                <label htmlFor="">Correo</label>
                <input className="form-control" type="text" placeholder="Correo" defaultValue={reservacion ? reservacion.correo : ''}/>
                <label htmlFor="">Telefono</label>
                <input className="form-control" type="tel" placeholder="Telefono" defaultValue={reservacion ? reservacion.telefono : ''}/>
                
            </div>
            <div className="input-contenido">
                <label htmlFor="">Inicio de Estadia</label>
                <input className="form-control" type="date" placeholder="Fecha de Inicio" defaultValue={reservacion ? reservacion.fechaInicio : ''}/>
                <label htmlFor="">Fin de Estadia</label>
                <input className="form-control" type="date" placeholder="Fecha de Salida" defaultValue={reservacion ? reservacion.fechaSalida : ''}/>
                <label htmlFor="">Hora</label>
                <input className="form-control" type="time" placeholder="Hora" defaultValue={reservacion ? reservacion.hora : ''}/>
            </div>
            <div className="input-contenido">
                <label htmlFor="">Numero de Habitaciones Sencillas</label>
                <input className="form-control" type="text" placeholder="Sencilla" defaultValue={reservacion ? reservacion.noHabitacion : ''}/>
                <label htmlFor="">Numero de Habitaciones Dobles</label>
                <input className="form-control" type="text" placeholder="Doble" defaultValue={reservacion ? reservacion.noHabitacion : ''}/>
                <label htmlFor="">Numero de Habitaciones Matrimoniales</label>
                <input className="form-control" type="text" placeholder="Matrimoniales" defaultValue={reservacion ? reservacion.noHabitacion : ''}/>
                <label htmlFor="">Numero de Habitaciones Suit</label>
                <input className="form-control" type="text" placeholder="Suit" defaultValue={reservacion ? reservacion.noHabitacion : ''}/>
                <label htmlFor="">Cantidad de Personas</label>
                <input className="form-control" type="number" placeholder="Cantidad de Personas" defaultValue={reservacion ? reservacion.cantidadPersonas : ''}/>
            </div>
            <div className="boton-registrar">
            <button className="btn btn-success" onClick={ ()=> registrar()} >Registrar</button>
            </div>
        </div>
    )
}
