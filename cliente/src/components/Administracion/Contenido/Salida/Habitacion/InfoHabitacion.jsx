import React, {useState,useEffect} from "react";
import CheckOut from "../CheckOut/CheckOut";
import Actividades from "./Actividades";
import InfoCliente from "./InfoCliente";

export default function InfoHabitacion({ ocultarInfo, tipo, informacion,carga,consumos, habitacionNumero }) {
  const [mostrarSalida, setMostrarSalida] = useState(false);
  const [totalPago, setTotalPago] = useState(0)

  const realizarCheck =(total)=>{
    setTotalPago(total)
    setMostrarSalida(!mostrarSalida)
  }
  let total = 0
  useEffect(() => {

  }, [informacion])
  

  return (
    <>
      {!mostrarSalida ? (
        !carga ? (
          <div className={`info-extendida mt-2 ${ocultarInfo ? "d-none" : ""}`}>
          <InfoCliente
            noReservacion={informacion ? informacion.noReservacion : ''}
            nombre={informacion ? informacion.nombre : ''}
            tipoHabitacion={tipo}
            fechaRegistro={informacion ? informacion.fechaEntrada : ''}
            fechaSalida={informacion ? informacion.fechaSalida : ''}
            numeroPersonas={informacion ? informacion.cantPersonas : ''}
            correo={informacion ? informacion.correo : ''}
            telefono={informacion ? informacion.telefono : ''}
          />
          <div className="registro-actividades">
            <h4>
              <strong>Registro de actividades</strong>
            </h4>
            {
              !consumos[0] ?
              <div className="d-flex flex-column mb-2">
                <div><strong>No a realizado consumo en el hotel </strong><br/></div>
              </div>
              :
              consumos.map((consumo,index)=>{
                total = total + consumo.precio
                return(
                  <Actividades key={index} nombre={consumo.nombreServicio} detalles={consumo.detalles} fecha={consumo.fecha} precio={consumo.precio} />
                )
              })
            }
            <div className="total-pago">
              <strong>Total a pagar: </strong>${total}
            </div>
          </div>
          <div className="info-extendida-boton">
            <button
              className="btn btn-success"
              onClick={() => realizarCheck(total)}
            >
              <strong>Realizar Check-out</strong>
            </button>
          </div>
        </div>
        ) :
        <div className="pantalla-carga">
          <div className="loader3"></div>
          <h5>Cargando Informacion</h5>
        </div>
      ) : (
        <div className={`${ocultarInfo ? "d-none" : ""}`}>
          <div className="titulo-check text-center">
            <label>Check-Out</label>
          </div>
          <CheckOut volver={() => setMostrarSalida(!mostrarSalida)} informacion={informacion} total={totalPago} habitacionNumero={habitacionNumero} />
        </div>
      )}
    </>
  );
}
