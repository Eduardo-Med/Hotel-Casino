import React from "react";
import "./spa.css";

export default function Spa() {
  return (
    <div className="hotel-spa p-4" id="Spa">
      <h1 className="mt-5 text-center">Spa</h1>
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
      <div className="imagenes-spa">
        <div className="conjunto-imagenes">
          <img src="https://www.codigounico.com/wp-content/uploads/sites/2/2017/08/la-vuelta-al-mundo-en-9-spas-de-lujo-16.jpg" alt="mesas"/>
          <img src="https://i.pinimg.com/originals/c4/d1/22/c4d122431676362be4c66be02cb4bc01.jpg" alt="mesas"/>
          <img src="https://diccionarioactual.com/wp-content/uploads/2017/03/spa-768x576.jpg" alt="mesas"/>
          <img src="https://cuponassets.cuponatic-latam.com/backendMx/uploads/imagenes_descuentos/67648/afadc0a5025412204b2cbea5f45f65a4d645e66d.XL2.jpg" alt="mesas"/>
          <button className="btn btn-success mt-4 boton-informacion">Mas información</button>
        </div>
       </div>
       <div className="boton-informacion2">
          <button className="btn btn-success mt-4 btn-lg btn-block">Mas información</button>
        </div>
    </div>
  );
}
