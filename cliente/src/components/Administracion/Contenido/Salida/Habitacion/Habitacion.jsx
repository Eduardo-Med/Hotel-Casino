import React, {useState} from "react";
import './habitacion.css'
import InfoHabitacion from "./InfoHabitacion";
import { useDispatch,useSelector} from "react-redux";
import fetchInformacion from "../../../../../redux/actions/informacionAction";

export default function Habitacion({numero, tipo, estado}) {
    const dispatch = useDispatch()
    const [ocultarInfo, setOcultarInfo] = useState(true)
    const informacion = useSelector((state) => state.informacion)

    const mostrarInformacion =()=>{
        setOcultarInfo(!ocultarInfo)
        console.log(informacion.informacion)
        if(!informacion.informacion[0]) dispatch(fetchInformacion('1646545123'))
    }

  return (
    <div className="habitaciones">
        <div className="habitacion" onClick={()=> mostrarInformacion()}>
            <div className="barra-estado" style={{background:`${estado ? '#67DF3E' : '#D53C24'}`}}></div>
            <div className="info-habitacion">
                <span>
                    <strong>Habitación {numero} </strong>
                </span>
                <span>
                    <strong>{tipo}</strong>
                </span>
            </div>
            <div className={`habitacion-icono  ${ocultarInfo ? "mover1" : "mover2"}`}>
                <i style={{background:'white'}} className="far fa-caret-square-down fa-2x "></i>
            </div>
        </div>
        {estado
        ?
         <></>
        :
         <InfoHabitacion ocultarInfo={ocultarInfo} tipo={tipo}/>
        }
    </div>

  );
}
