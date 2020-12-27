import React from "react";
import Tarjeta from "../../Otro/Tarjeta";
import Detalles from "./Detalles"
import "./cuartos.css";

export default function Cuartos() {
  return (
    <div className="hotel-habitaciones" id="Habitacion">
      <h1 className="mt-5 text-center">Habitaciones</h1>
      <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#simple">Simple</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" data-toggle="tab" href="#doble">Doble</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#matrimonial">Matrimonial</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#suite">Suite</a>
          </li>
        </ul>
        <div id="myTabContent" className="tab-content">
          <div className="tab-pane fade" id="simple">
            <div className="inicio-contenido">
                <Tarjeta titulo="Simple" precio="1250"/>
                <Detalles/>
            </div>
          </div>
          <div className="tab-pane fade active show" id="doble">
            <div className="inicio-contenido">
                <Tarjeta titulo="Doble" precio="2500"/>
                <Detalles/>
            </div>
          </div>
          <div className="tab-pane fade" id="matrimonial">
            <div className="inicio-contenido">
                <Tarjeta titulo="Matrimonial" precio="5000"/>
                <Detalles/>
            </div>
          </div>
          <div className="tab-pane fade" id="suite">
            <div className="inicio-contenido">
                <Tarjeta titulo="Suite" precio="9000"/>
                <Detalles/>
            </div>
          </div>
        </div>
    </div>
  );
}
