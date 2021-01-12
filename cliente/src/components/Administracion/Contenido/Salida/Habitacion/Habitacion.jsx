import React, {useState} from "react";
import './habitacion.css'
import InfoHabitacion from "./InfoHabitacion";
import {obtenerInformacionHuesped,obtenerConsumoHuesped} from '../../../../../middleware/obtenerInformacionHuesped'

export default function Habitacion({numero, tipo, estado}) {
    const [ocultarInfo, setOcultarInfo] = useState(true)
    const [cargarDatos, setCargarDatos] = useState(false)
    const [screenLoader, setScreenLoader] = useState(false)
    const [datosInformacion, setDatosInformacion] = useState({noReservacion: '', nombre:'', fechaEntrada: '',fechaSalida: '',cantPersonas: '',correo: '',telefono: ''})
    const [datosConsumo, setDatosConsumo] = useState([])

    const mostrarInformacion = async ()=>{
        setOcultarInfo(!ocultarInfo)
        if(!cargarDatos && !estado){
            setScreenLoader(true)
            const resultadoInformacion = await obtenerInformacionHuesped(numero)
            const resultadoConsumo = await obtenerConsumoHuesped(numero)
            setScreenLoader(false)
            setDatosInformacion({
                noReservacion: resultadoInformacion.data[0].idCliente.noReservacion,
                nombre: resultadoInformacion.data[0].idCliente.nombre,
                fechaEntrada: resultadoInformacion.data[0].fechaEntrada,
                fechaSalida: resultadoInformacion.data[0].fechaSalida,
                cantPersonas: resultadoInformacion.data[0].cantPersonas,
                correo: resultadoInformacion.data[0].idCliente.correo,
                telefono: resultadoInformacion.data[0].idCliente.telefono,
            })
            setDatosConsumo(resultadoConsumo.data)

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
         <InfoHabitacion ocultarInfo={ocultarInfo} tipo={tipo} informacion={datosInformacion} carga={screenLoader} consumos={datosConsumo}/>
        }
    </div>

  );
}
