import React, {useState} from "react";
import './habitacion.css'
import InfoHabitacion from "./InfoHabitacion";
import {obtenerInformacionHuesped} from '../../../../../middleware/obtenerInformacionHuesped'

export default function Habitacion({numero, tipo, estado}) {
    const [ocultarInfo, setOcultarInfo] = useState(true)
    const [cargarDatos, setCargarDatos] = useState(false)
    const [screenLoader, setScreenLoader] = useState(false)
    const [datos, setDatos] = useState({noReservacion: '', nombre:'', fechaEntrada: '',fechaSalida: '',cantPersonas: '',correo: '',telefono: ''})

    const mostrarInformacion = async ()=>{
        setOcultarInfo(!ocultarInfo)
        if(!cargarDatos && !estado){
            setScreenLoader(true)
            const resultado = await obtenerInformacionHuesped(numero)
            setScreenLoader(false)
            setDatos({
                noReservacion: resultado.data[0].idCliente.noReservacion,
                nombre: resultado.data[0].idCliente.nombre,
                fechaEntrada: resultado.data[0].fechaEntrada,
                fechaSalida: resultado.data[0].fechaSalida,
                cantPersonas: resultado.data[0].cantPersonas,
                correo: resultado.data[0].idCliente.correo,
                telefono: resultado.data[0].idCliente.telefono,
            })
            setCargarDatos(true)
        }
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
         <InfoHabitacion ocultarInfo={ocultarInfo} tipo={tipo} informacion={datos} carga={screenLoader}/>
        }
    </div>

  );
}
