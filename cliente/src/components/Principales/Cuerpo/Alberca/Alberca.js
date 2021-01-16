import React from "react";
import './alberca.css'

export default function Alberca() {
  return (
    <div className="hotel-alberca p-4" id="Alberca">
      <h1 className="mt-5 text-center">Alberca</h1>
      <div className="alberca-informacion">
        <p>Relajate y descansa con actividades para todas las edades y toda la familia, desde poder disfrutar de sabrosas bebidas y alimentos hasta nadar con toda tu familia.
        </p>
        <p>
            Disfruta de los mejores momentos estando aqui y sacate fotos increibles para guardarlos como momentos inolvidables.
        </p>
      </div>
      <div className="imagenes-alberca">
          <div className="conjunto-imagenes mb-5">
            <img src="https://media-cdn.tripadvisor.com/media/photo-s/04/6f/86/b1/paradisus-cancun.jpg" alt="mesas"/>
            <img src="https://media-cdn.tripadvisor.com/media/photo-s/1b/73/c4/92/emporio-cancun.jpg" alt="mesas"/>
            <img src="https://www.hotelmariadelcarmen.com.mx/media/imgs/hotel-maria-del-carmen-contentmaria-alberca3.jpg" alt="mesas"/>
            <img src="https://www.animalgourmet.com/wp-content/uploads/2018/03/hotelcarlota1.jpg" alt="mesas"/>
            {process.env.REACT_APP_ALBERCA_MENU && <a className="text-white text-decoration-none" href={process.env.REACT_APP_ALBERCA_MENU }><button className="btn btn-success mt-4 boton-informacion">Mas información </button></a>}
          </div>
      </div>
      <div className="boton-informacion2">
          {process.env.REACT_APP_ALBERCA_MENU &&
          <a className="text-white text-decoration-none" href={process.env.REACT_APP_ALBERCA_MENU}>
            <button className="btn btn-success mt-4 btn-lg btn-block">Mas información</button>
          </a>
          }
      </div>
    </div>
  );
}
