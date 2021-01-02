import React, {useState} from "react";
import Registro from "./Registro/Registro";
import Salida from "./Salida/Salida";

export default function Contenido() {
    const [pestanaActiva, setPestanaActiva] = useState(false)

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
