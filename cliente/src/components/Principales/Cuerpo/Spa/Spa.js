import React from "react";
import "./spa.css";

export default function Spa() {
  return (
    <div className="hotel-spa p-4" id="Spa">
      <h1 className="mt-5 text-center">Spa</h1>
      <div className="restaurante-informacion">
        <p>
        Apenas tenemos un momento para relajarnos, para no hacer nada o para dedicarlo a nosotros mismos. Por ello, el Spa de Hotel-Casino ha aparecido con gran fuerza en nuestras vidas.
        </p>
        <p>
        Los tratamientos de spa son esenciales para aislarse del exterior, dejando a un lado el <b>estrés.</b> Un añadido de los spas, es que además de mejorar tu estado físico y mental, también cuentan con tratamientos estéticos todo esto dentro de nuestro Spa.
        </p>
      </div>
      <div className="imagenes-spa">
        <div className="conjunto-imagenes mb-5">
          <img src="https://image.freepik.com/foto-gratis/arreglo-spa-velas-toalla_23-2148290943.jpg" alt="mesas"/>
          <img src="https://i.pinimg.com/originals/c4/d1/22/c4d122431676362be4c66be02cb4bc01.jpg" alt="mesas"/>
          <img src="https://diccionarioactual.com/wp-content/uploads/2017/03/spa-768x576.jpg" alt="mesas"/>
          <img src="https://cuponassets.cuponatic-latam.com/backendMx/uploads/imagenes_descuentos/67648/afadc0a5025412204b2cbea5f45f65a4d645e66d.XL2.jpg" alt="mesas"/>
          {process.env.REACT_APP_SPA_MENU && <a className="text-white text-decoration-none" href={process.env.REACT_APP_SPA_MENU }><button className="btn btn-success mt-4 boton-informacion">Mas información </button></a>}
          </div>
      </div>
      <div className="boton-informacion2">
          {process.env.REACT_APP_SPA_MENU && 
          <a className="text-white text-decoration-none" href={process.env.REACT_APP_SPA_MENU }>
            <button className="btn btn-success mt-4 btn-lg btn-block">Mas información</button>
          </a>
          }
        </div>
    </div>
  );
}
