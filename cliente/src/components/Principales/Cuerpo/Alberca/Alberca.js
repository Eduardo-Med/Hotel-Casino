import React from "react";
import './alberca.css'

export default function Alberca() {
  return (
    <div className="hotel-alberca p-4" id="Alberca">
      <h1 className="mt-5 text-center">Alberca</h1>
      <div className="alberca-informacion">
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
      <div className="imagenes-alberca">
          <div className="conjunto-imagenes">
            <img src="https://media-cdn.tripadvisor.com/media/photo-s/04/6f/86/b1/paradisus-cancun.jpg" alt="mesas"/>
            <img src="https://media-cdn.tripadvisor.com/media/photo-s/1b/73/c4/92/emporio-cancun.jpg" alt="mesas"/>
            <img src="https://www.hotelmariadelcarmen.com.mx/media/imgs/hotel-maria-del-carmen-contentmaria-alberca3.jpg" alt="mesas"/>
            <img src="https://www.animalgourmet.com/wp-content/uploads/2018/03/hotelcarlota1.jpg" alt="mesas"/>
            <button className="btn btn-success mt-4 boton-informacion">Mas información</button>
          </div>
      </div>
      <div className="boton-informacion2">
          <button className="btn btn-success mt-4 btn-lg btn-block">Mas información</button>
      </div>
    </div>
  );
}
