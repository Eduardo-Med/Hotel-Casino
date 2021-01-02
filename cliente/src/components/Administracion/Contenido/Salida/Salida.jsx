import React from 'react'
import Habitacion from './Habitacion/Habitacion'
import './salida.css'

export default function Salida() {
    return (
        <div className="contenido-salida">
            <div className="salida-titulo"><h5>Habitaciones</h5></div>
            <Habitacion numero={1} tipo="Sencilla" estado={0}/>
            <Habitacion numero={2} tipo="Sencilla" estado={1}/>
            <Habitacion numero={3} tipo="Sencilla" estado={1}/>
            <Habitacion numero={4} tipo="Sencilla" estado={1}/>
            <Habitacion numero={5} tipo="Sencilla" estado={0}/>
            <Habitacion numero={6} tipo="Doble" estado={1}/>
            <Habitacion numero={7} tipo="Doble" estado={1}/>
            <Habitacion numero={8} tipo="Doble" estado={1}/>
            <Habitacion numero={9} tipo="Doble" estado={0}/>
            <Habitacion numero={10} tipo="Suit" estado={1}/>
            <Habitacion numero={11} tipo="Suit" estado={1}/>
            <Habitacion numero={12} tipo="Suit" estado={1}/>
            <Habitacion numero={13} tipo="Suit" estado={0}/>
            <Habitacion numero={14} tipo="Sencilla" estado={1}/>
            <Habitacion numero={15} tipo="Sencilla" estado={1}/>
            <Habitacion numero={16} tipo="Sencilla" estado={1}/>
        </div>
    )
}
