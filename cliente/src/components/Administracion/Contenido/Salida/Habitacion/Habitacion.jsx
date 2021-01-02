import React, {useState} from "react";
import './habitacion.css'
import InfoHabitacion from "./InfoHabitacion";

export default function Habitacion({numero, tipo, estado}) {
    const [ocultarInfo, setOcultarInfo] = useState(true)
  return (
    <div className="habitaciones">
        <div className="habitacion" onClick={()=> setOcultarInfo(!ocultarInfo)}>
            <div className="barra-estado" style={{background:`${!estado ? '#67DF3E' : '#D53C24'}`}}></div>
            <div className="info-habitacion">
                <span>
                    <strong>Habitación #{numero} </strong>
                </span>
                <span>
                    <strong>{tipo}</strong>
                </span>
            </div>
            <div className={`habitacion-icono  ${ocultarInfo ? "mover1" : "mover2"}`}>
                <i style={{background:'white'}} className="far fa-caret-square-down fa-2x "></i>
            </div>
        </div>
        {!estado
        ?
         <></>
        :
         <InfoHabitacion ocultarInfo={ocultarInfo}/>
        }
    </div>

  );
}
