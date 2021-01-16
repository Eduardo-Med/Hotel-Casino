import React, {useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import fetchHabitacion from "../../../redux/actions/habitacionAction";
import Registro from "./Registro/Registro";
import Salida from "./Salida/Salida";
import io from 'socket.io-client'

export default function Contenido() {
    const dispatch = useDispatch()
    const [pestanaActiva, setPestanaActiva] = useState(false)
    const ENDPOINT = process.env.ENDPOINT

    let socket = io(ENDPOINT)

    useEffect(() => {
      socket.emit("conectar", "Conectado")
      socket.emit("actualizarHabs", "Conectado")
      socket.on("actualizarHabs", function(msg){
        dispatch(fetchHabitacion())
      }); 

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  return (
    <div className="contenido">
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
}
