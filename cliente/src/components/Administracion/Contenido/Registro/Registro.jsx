import React, {useState} from 'react'
import './registro.css'
import {alerta} from '../../../../middleware/alertas'

export default function Registro() {
    const [errorReservacion, setErrorReservacion] = useState(false)
    return (
        <div className="registro">
            <h2>Registro</h2>
            <div className="contenido-registro">
                <div className="titulo-registro">            
                </div>
                <div className="formulario-registro">
                    <div className="input-contenido">
                        <label htmlFor="">Numero de Reservacion</label>
                        <input className="form-control" type="text" placeholder="No. Reservacion"/>
                        <label htmlFor="" className={`mensaje-error ${errorReservacion ? '' : 'd-none'}`}>Numero de Reservacion Incorrecto, Intentelo de nuevo mas tarde</label>
                        <button className="btn btn-success" onClick={()=> setErrorReservacion(true)}>Comprobar</button>
                    </div>
                    <div className="informacion formulario">
                        <div className="input-contenido">
                            <label htmlFor="">Nombre Cliente</label>
                            <input className="form-control" type="text" placeholder="Nombre"/>
                        </div>
                        <div className="input-contenido">
                            <label htmlFor="">Correo</label>
                            <input className="form-control" type="text" placeholder="Correo"/>
                            <label htmlFor="">Telefono</label>
                            <input className="form-control" type="tel" placeholder="Telefono"/>
                            
                        </div>
                        <div className="input-contenido">
                            <label htmlFor="">Inicio de Estadia</label>
                            <input className="form-control" type="date" placeholder="Fecha de Inicio"/>
                            <label htmlFor="">Fin de Estadia</label>
                            <input className="form-control" type="date" placeholder="Fecha de Salida"/>
                            <label htmlFor="">Hora</label>
                            <input className="form-control" type="time" placeholder="Hora"/>
                        </div>
                        <div className="input-contenido">
                            <label htmlFor="">Tipo Habitacion</label>
                            <input className="form-control" type="text" placeholder="Tipo de Habitacion"/>
                            <label htmlFor="">Numero Habitacion</label>
                            <input className="form-control" type="text" placeholder="Numero de Habitacion"/>
                            <label htmlFor="">Cantidad de Personas</label>
                            <input className="form-control" type="number" placeholder="Cantidad de Personas"/>
                        </div>
                        <div className="boton-registrar">
                        <button className="btn btn-success" onClick={()=>alerta('Registro', 'Registro Correcto', 'success', 'Cerrar')}>Registrar</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
