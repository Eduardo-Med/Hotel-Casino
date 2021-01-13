import React from 'react'
import Carrusel  from '../../Otro/Carrusel';
import './styles.css'

export default function InfoPrincipal() {
    return (
        <div className="hotel-carrusel">
            <Carrusel/>
            <div className="hotel-introduccion" id="Inicio">
                <div className="informacion-hotel">
                    <h2>Bienvenido Al Hotel-Casino</h2>
                    <p>Hotel-Casino cuenta con un total de 80 habitaciones entre las cuales se encuentran simples , dobles matrimoniales y suite al igual que contamos con <b><i>salon de eventos, restaurante, spa, alberca-snacks y casino.</i></b> </p>
                 </div>
                <div className="reservar-boton">
                    <button className="btn btn-success">Reservar ahora</button>
                </div>
            </div>
        </div>
    )
}
