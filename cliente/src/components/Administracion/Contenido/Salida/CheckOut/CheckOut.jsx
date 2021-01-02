import React, {useState} from 'react'
import './checkout.css'
import DatosPago from './DatosPago'

export default function CheckOut({volver}) {
    const [mostrarContenidoPago, setMostrarContenidoPago] = useState(false)
    return (
        <div>
            <div className={`check-out ${mostrarContenidoPago ? 'formulario' : '' }`}>
                <div className="input-contenido">
                    <label htmlFor="">No. Reservacion</label>
                    <input className="form-control" type="text" placeholder="Numero de reservacion"/>
                </div>
                <div className="input-contenido">
                    <label htmlFor="">Nombre Cliente</label>
                    <input className="form-control" type="text" placeholder="Nombre Cliente"/>
                </div> 
                <div className="input-contenido">
                    <label htmlFor="">Fecha de inicio de estadia</label>
                    <input className="form-control" type="text" placeholder="Fecha de inicio de estadia"/>
                </div> 
                <div className="input-contenido">
                    <label htmlFor="">Fecha de fin de estadia</label>
                    <input className="form-control" type="text" placeholder="Fecha de fin de estadia"/>
                </div> 
                <div className="input-contenido">
                    <label htmlFor="">Hora de salida</label>
                    <input className="form-control" type="text" placeholder="Hora de salida"/>
                </div> 
                <div className="input-contenido">
                    <label htmlFor="">Adeudo a cobrar</label>
                    <input className="form-control" type="text" placeholder="Adeudo a cobrar"/>
                </div> 
                <div className={`input-contenido botones-check ${mostrarContenidoPago ? 'd-none' : '' }`}>
                    <button className="btn btn-success" onClick={()=>setMostrarContenidoPago(!mostrarContenidoPago)}>Pasar a pago</button>
                    <button className="btn btn-danger" onClick={()=>volver()}>Cancelar</button>
                </div>
            </div>
            <DatosPago mostrar={mostrarContenidoPago} cancelar={()=>setMostrarContenidoPago(!mostrarContenidoPago)}/>
        </div>
    )
}
