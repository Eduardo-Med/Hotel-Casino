import React, {useState, useEffect} from 'react'
import Habitacion from './Habitacion/Habitacion'
import {useSelector } from 'react-redux'
import {verTipoHabitacion} from '../../../../middleware/tipoHabitacion'
import './salida.css'


export default function Salida() {
    const habitaciones = useSelector((state) => state.habitacion.habitacion[0])
    const [tipoHabitacion, setTipoHabitacion] = useState(0) 
    const [disponibilidad, setDisponibilidad] = useState(1)
    useEffect(() => {

    }, [habitaciones])
    return (
        <div className="contenido-salida">
            <div className="salida-titulo"><h5>Habitaciones</h5></div>
            <div className="salida-filtro">
                <div className={`opcion-filtro ${tipoHabitacion === 0 ? 'opcion-filtro-seleccionado' : ''}`} onClick={()=> setTipoHabitacion(0)}>
                    <h6>Todas</h6>
                </div>
                <div className={`opcion-filtro ${tipoHabitacion === 1 ? 'opcion-filtro-seleccionado' : ''}`} onClick={()=> setTipoHabitacion(1)}>
                    <h6>Sencilla</h6>
                </div>
                <div className={`opcion-filtro ${tipoHabitacion === 2 ? 'opcion-filtro-seleccionado' : ''}`} onClick={()=> setTipoHabitacion(2)}>
                    <h6>Doble</h6>
                </div>
                <div className={`opcion-filtro ${tipoHabitacion === 3 ? 'opcion-filtro-seleccionado' : ''}`} onClick={()=> setTipoHabitacion(3)}>
                    <h6>Matrimonial</h6>
                </div>
                <div className={`opcion-filtro ${tipoHabitacion === 4 ? 'opcion-filtro-seleccionado' : ''}`} onClick={()=> setTipoHabitacion(4)}> 
                    <h6>Suit</h6>
                </div>
            </div>
            <div className="salida-filtro-disponibilidad">
                <div className={`opcion-filtro ${disponibilidad === 0 ? 'opcion-filtro-seleccionado' : ''}`} onClick={()=> setDisponibilidad(0)}>
                    <h6>Disponibles</h6>
                </div>
                <div className={`opcion-filtro ${disponibilidad === 1 ? 'opcion-filtro-seleccionado' : ''}`} onClick={()=> setDisponibilidad(1)}>
                    <h6>Ocupadas</h6>
                </div>
            </div> 
            {
                habitaciones
                ?
                habitaciones.map((habitacion, index)=>{
                    if(disponibilidad === 0 && habitacion.disponible){
                        if(tipoHabitacion === 0){
                            return(
                                <Habitacion key={index} numero={habitacion.noCuarto} tipo={verTipoHabitacion(habitacion.idTipo)} estado={habitacion.disponible}/>
                            )
                        }else if(tipoHabitacion === 1 && verTipoHabitacion(habitacion.idTipo) === 'Sencilla'){
                            return(
                                <Habitacion key={index} numero={habitacion.noCuarto} tipo={verTipoHabitacion(habitacion.idTipo)} estado={habitacion.disponible}/>
                            )
                        }else if(tipoHabitacion === 2 && verTipoHabitacion(habitacion.idTipo) === 'Doble'){
                            return(
                                <Habitacion key={index} numero={habitacion.noCuarto} tipo={verTipoHabitacion(habitacion.idTipo)} estado={habitacion.disponible}/>
                            )
                        }else if(tipoHabitacion === 3 && verTipoHabitacion(habitacion.idTipo) === 'Matrimonial'){
                            return(
                                <Habitacion key={index} numero={habitacion.noCuarto} tipo={verTipoHabitacion(habitacion.idTipo)} estado={habitacion.disponible}/>
                            )
                        }else if(tipoHabitacion === 4 && verTipoHabitacion(habitacion.idTipo) === 'Suite'){
                            return(
                                <Habitacion key={index} numero={habitacion.noCuarto} tipo={verTipoHabitacion(habitacion.idTipo)} estado={habitacion.disponible}/>
                            )
                        }else{
                            return(
                                <div></div>
                            )
                        }
                    }else if(disponibilidad === 1 && !habitacion.disponible){
                        if(tipoHabitacion === 0){
                            return(
                                <Habitacion key={index} numero={habitacion.noCuarto} tipo={verTipoHabitacion(habitacion.idTipo)} estado={habitacion.disponible}/>
                            )
                        }else if(tipoHabitacion === 1 && verTipoHabitacion(habitacion.idTipo) === 'Sencilla'){
                            return(
                                <Habitacion key={index} numero={habitacion.noCuarto} tipo={verTipoHabitacion(habitacion.idTipo)} estado={habitacion.disponible}/>
                            )
                        }else if(tipoHabitacion === 2 && verTipoHabitacion(habitacion.idTipo) === 'Doble'){
                            return(
                                <Habitacion key={index} numero={habitacion.noCuarto} tipo={verTipoHabitacion(habitacion.idTipo)} estado={habitacion.disponible}/>
                            )
                        }else if(tipoHabitacion === 3 && verTipoHabitacion(habitacion.idTipo) === 'Matrimonial'){
                            return(
                                <Habitacion key={index} numero={habitacion.noCuarto} tipo={verTipoHabitacion(habitacion.idTipo)} estado={habitacion.disponible}/>
                            )
                        }else if(tipoHabitacion === 4 && verTipoHabitacion(habitacion.idTipo) === 'Suite'){
                            return(
                                <Habitacion key={index} numero={habitacion.noCuarto} tipo={verTipoHabitacion(habitacion.idTipo)} estado={habitacion.disponible}/>
                            )
                        }else{
                            return(
                                <div></div>
                            )
                        }
                    }else{
                        return(
                            <div></div>
                        )
                    }
 
                })
                :
                <div className="screen-loader2">
                    <div className="loader2"></div>
                    <h4>Cargando Habitaciones</h4>
                </div>
            }
        </div>
    )
}
