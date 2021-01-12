import React from "react";
import './restaurante.css'

export default function Restaurnate() {
  return (
    <div className="hotel-restaurante p-4" id="Restaurante">
      <h1 className="mt-5 text-center">Restaurante</h1>
      <div className="restaurante-informacion">
        <p>
        Nuestro restaurante tiene una capacidad de 120 comensales y de la misma forma cuenta con todo el mobiliario y equipamiento que un restaurante de categoría lo amerita,con muestra decoración y estilo.


        </p>
        <p>
        Contamos con los mas <b>experimentados Cheff de renombre</b> que plasman todo su arte y buen gusto para proporcionarle a nuestro pasajero lo mejor de la comida Mexicana e internacional
        </p>
      </div>
      <div className="imagenes-restaurant">
          <div className="conjunto-imagenes">
              <img src="https://s3-eu-west-1.amazonaws.com/gr-cms/media/filer_public/cc/ec/ccecba57-fc3a-4b94-911a-966ab4265c40/1.jpg" alt="mesas"/>
              <img src="https://www.animalgourmet.com/wp-content/uploads/2018/01/jay-wennington-2065-1-e1516220610269.jpg" alt="mesas"/>
              <img src="https://i2.wp.com/goula.lat/wp-content/uploads/2020/06/restaurantes-nueva-normalidad.jpg?fit=1000%2C667&ssl=1" alt="mesas"/>
              <img src="https://www.cursosgastronomia.com.mx/wp-content/uploads/2014/05/caracteristicas-de-restaurante-exitoso.JPG" alt="mesas"/>
              <button className="btn btn-success mt-4 boton-informacion">Mas información</button>
          </div>
      </div>
      <div className="boton-informacion2">
          <button className="btn btn-success mt-4 btn-lg btn-block">Mas información</button>
      </div>
    </div>
  );
}
