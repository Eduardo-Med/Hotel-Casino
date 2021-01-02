import React from 'react'
import Actividades from './Actividades'
import InfoCliente from './InfoCliente'

export default function InfoHabitacion({ocultarInfo}) {
    return (
        <div className={`info-extendida mt-2 ${ocultarInfo ? "d-none" : ""}`}>
            <InfoCliente/>
            <div className="registro-actividades">
                <h4><strong>Registro de actividades</strong></h4>
                <Actividades nombre={"Comida En Restaurante"} precio={240}/>
                <Actividades nombre={"Comida En Restaurante"} precio={450}/>
                <Actividades nombre={"Comida En Restaurante"} precio={650}/>
                <Actividades nombre={"Comida En Restaurante"} precio={800}/>
                <div className="total-pago">
                    <strong>Total a pagar: </strong>$2180
                </div>
            </div>
            <div className="info-extendida-boton">
                <button className="btn btn-success"><strong>Realizar Check-out</strong></button>
            </div>
        </div>
    )
}
