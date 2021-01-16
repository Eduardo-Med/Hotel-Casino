import React from "react";
import "./eventos.css";

export default function Eventos() {
  return (
    <div className="hotel-eventos p-4" id="Eventos">
      <h1 className="mt-5 text-center">Eventos</h1>
      <div className="restaurante-informacion">
        <p>
        El hotel-Casino ofrece sus salas de actos para la celebración de <i>Eventos empresariales, conferencias, reuniones, seminarios, desayunos de trabajo y otros eventos.</i>
        </p>
        <p>
        Los profesionales del recinto les ofrecerán su elegante y selecto servicio de banquetería, en el que podrán degustar sus deliciosos platos y disfrutar de una fiesta que <b>recordarán para siempre.</b>
        </p>
      </div>
      <div className="imagenes-restaurant mb-5">
          <div className="conjunto-imagenes">
            <img src="https://twblog.com.mx/wp-content/uploads/2018/12/IMG_8252.jpg" alt="mesas"/>
            <img src="https://www.eventoscentralhoteles.com/web/wp-content/uploads/2015/02/Septimo_Zocalo_Central-16.jpg" alt="mesas"/>
            <img src="https://hotelchipinque.com/wp-content/uploads/2019/07/event-1.jpg" alt="mesas"/>
            <img src="https://www.clikisalud.net/wp-content/uploads/2018/06/reglas-evitar-comer-de-mas-fiestas-eventos-sociales.jpg" alt="mesas"/>
            {process.env.REACT_APP_EVENTOS_MENU && <a className="text-white text-decoration-none" href={process.env.REACT_APP_EVENTOS_MENU }><button className="btn btn-success mt-4 boton-informacion">Mas información </button></a>}
          </div>
      </div>
      <div className="boton-informacion2">
          {process.env.REACT_APP_EVENTOS_MENU && 
          <a className="text-white text-decoration-none" href={process.env.REACT_APP_EVENTOS_MENU}>
            <button className="btn btn-success mt-4 btn-lg btn-block">Mas información</button>
          </a>
          }
      </div>
    </div>
  );
}
