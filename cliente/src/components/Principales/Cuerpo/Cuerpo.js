import React from 'react'
import './styles.css'
import InfoPrincipal  from '../Cuerpo/Info-Principal/InfoPrincipal';
import Servicios  from '../Cuerpo/Servicio/Servicio';
import Cuartos  from '../Cuerpo/Cuartos/Cuartos';
import Restaurante  from '../Cuerpo/Restaurante/Restaurnate';
import Spa  from '../Cuerpo/Spa/Spa';
import Casino  from '../Cuerpo/Casino/Casino';
import Alberca  from '../Cuerpo/Alberca/Alberca';
import Eventos  from '../Cuerpo/Eventos/Eventos';
import Navbar from '../Navbar/Navbar';


export default function Cuerpo() {
    return (
        <div className="hotel">
            <Navbar/>
            <InfoPrincipal/>
            <Servicios/>
            <Cuartos/>
            <Restaurante/>
            <Spa/>
            <Casino/>
            <Eventos/>
            <Alberca/>
            <div className="hotel-footer p-4">
                <h1 className="text-center" id="contacto">Contacto</h1>
                <div className="text-center mt-4">
                    <h6><strong>Direccion: </strong> Calle Siempre Viva 2015, Hidalgo</h6>
                    <h6><strong>Tel: </strong> (522) 654-4575457</h6>
                    <h6><strong>Correo: </strong>hotelcasino@hotmail.com</h6>
                </div>
            </div>
        </div>
    )
}
