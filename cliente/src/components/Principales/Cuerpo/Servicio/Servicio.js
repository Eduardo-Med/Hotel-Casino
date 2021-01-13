import React from 'react'
import './servicio.css'

export default function Servicio() {
    return (
        <div className="hotel-informacion">
        <h2 className="text-center">Servicios</h2>
        <div className="info-hi">
        <p className="text-justify pl-5 pr-5 pt-3 pb-4">Hotel-Casino cuenta con un gran equipo humano, profesional capacitado y en constante perfeccionamiento, enfocados en entregar día a día, lo mejor de cada uno de ellos, una optima y profesional atención.</p>
        </div>
       <div className="servicios pl-5 ">
            <div className="contenedor-servicios">
                <div className="item">
                    <i className="fas fa-utensils"></i>
                    Restaurante
                </div>
                <div className="item">
                <i className="fas fa-swimming-pool"></i>
                    Alberca
                </div>
                <div className="item">
                <i className="fas fa-calendar-alt"></i>
                    Eventos
                </div>
                <div className="item">
                <i className="fas fa-dice"></i>
                    Casino
                </div>
                <div className="item">
                <i className="fas fa-spa"></i>
                    Spa
                </div>
                <div className="item">
                <i class="fas fa-money-check-alt"></i>
                    Promociones
                </div>
            </div>
        </div>
    </div>
    )
}
