import React, {useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import fetchHabitacion from "../../../redux/actions/habitacionAction";
import Registro from "./Registro/Registro";
import Salida from "./Salida/Salida";
import io from 'socket.io-client'
import { Redirect } from "react-router-dom";

export default function Contenido({handleLogOut}) {
    const dispatch = useDispatch()
    const [pestanaActiva, setPestanaActiva] = useState(false)
    const ENDPOINT = process.env.ENDPOINT
    let socket = io(ENDPOINT)
    let usuario = localStorage.getItem('userhcp')

    useEffect(() => {
      dispatch(fetchHabitacion())
      socket.emit("conectar", "Conectado")
      socket.emit("actualizarHabs", "Conectado")
      socket.on("actualizarHabs", function(msg){
        dispatch(fetchHabitacion())
      }); 
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
  if(usuario === 'true'){
    return (
      <div className="contenido">
        <div className="d-flex justify-content-end mr-3 mb-2">
          <div className="d-flex salir"  onClick={() => handleLogOut ()}>
            <label className="mr-2" ><strong>Salir</strong></label>
            <i className="fas fa-sign-out-alt fa-2x mt-1"></i>
          </div>
        </div>
        <div className="">
          {/* <h3 className="text-center">Titulo Provisional</h3> */}
          <div className="grupo-botones">
              <button className={`btn btn-${!pestanaActiva ? 'success enable' : 'primary'} boton-registro`}     
                      onClick={()=>setPestanaActiva(!pestanaActiva)}
                      disabled={!pestanaActiva}
                      ><h4>Check-In</h4>
              </button>
              <button className={`btn btn-${pestanaActiva ? 'success' : 'primary '} boton-habitaciones`}    
                      onClick={()=>setPestanaActiva(!pestanaActiva)}
                      disabled={pestanaActiva}
                      ><h4>Habitaciones</h4>
              </button>
          </div>
          {!pestanaActiva
          ?
          <Registro/>
          :
          <Salida/>
          }
        </div>
      </div>
    );
  }else{
    return(
      <Redirect to={'/admin/login'} />
    )
  }
}
