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
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, soluta officiis. Numquam ipsum quod nesciunt reiciendis, architecto iste quaerat et alias, quibusdam similique, exercitationem aspernatur ipsam ducimus labore. Saepe delectus molestias libero repellat, ex, quidem fuga in odio minima aperiam rem dignissimos iste totam ut!</p>
                 </div>
                <div className="reservar-boton">
                    <button className="btn btn-success">Reservar ahora</button>
                </div>
            </div>
        </div>
    )
}
