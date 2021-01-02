import React from 'react'
import './registro.css'

export default function Registro() {
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
                        <button className="btn btn-success">Comprobar</button>
                    </div>
                    <div className="informacion">
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
                        <button className="btn btn-success">Registrar</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
