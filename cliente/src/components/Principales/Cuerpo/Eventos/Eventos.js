import React from "react";
import "./eventos.css";

export default function Eventos() {
  return (
    <div className="hotel-eventos p-4" id="Eventos">
      <h1 className="mt-5 text-center">Eventos</h1>
      <div className="restaurante-informacion">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit vero
          ipsa necessitatibus? Ex corrupti sunt earum esse cumque, expedita quis,
          obcaecati explicabo commodi doloremque illo.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos quae sit
          sint accusantium, culpa cupiditate totam. Nobis possimus sapiente maxime
          quam. Voluptatibus hic quia in.
        </p>
      </div>
      <div className="imagenes-restaurant">
          <div className="conjunto-imagenes">
            <img src="https://twblog.com.mx/wp-content/uploads/2018/12/IMG_8252.jpg" alt="mesas"/>
            <img src="https://www.eventoscentralhoteles.com/web/wp-content/uploads/2015/02/Septimo_Zocalo_Central-16.jpg" alt="mesas"/>
            <img src="https://hotelchipinque.com/wp-content/uploads/2019/07/event-1.jpg" alt="mesas"/>
            <img src="https://www.clikisalud.net/wp-content/uploads/2018/06/reglas-evitar-comer-de-mas-fiestas-eventos-sociales.jpg" alt="mesas"/>
            <button className="btn btn-success mt-4 boton-informacion">Mas información</button>
          </div>
      </div>
      <div className="boton-informacion2">
          <button className="btn btn-success mt-4 btn-lg btn-block">Mas información</button>
      </div>
    </div>
  );
}
