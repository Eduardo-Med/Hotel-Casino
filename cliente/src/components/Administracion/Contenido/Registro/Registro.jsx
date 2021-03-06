import React, {useState} from 'react'
import './registro.css'


import { useDispatch, useSelector } from 'react-redux'
import fetchReservacion from '../../../../redux/actions/reservacionAction'
import FormularioRegistro from './FormularioRegistro'




export default function Registro() {
    const dispatch = useDispatch()
    const [noReservacion, setNoReservacion] = useState('')
    const reservacion = useSelector((state) => state.reservacion)
    const registro = useSelector((state) => state.registro)
    
    return (
        <div className="registro">
            <h2>Registro</h2>
            <div className="contenido-registro">
                <div className="titulo-registro">            
                </div>
                <div className={`formulario-registro ${(reservacion.loading || registro.loading) && 'screen-loader'}`}>
                    {(reservacion.loading || registro.loading) && <div className="loader"></div>}
                    <div className="input-contenido">
                        <label htmlFor="">Numero de Reservacion</label>
                        <input 
                            className="form-control" 
                            type="text" 
                            placeholder="No. Reservacion"
                            id="buscar-reservacion"
                            value={noReservacion}
                            onChange={
                                (event) => {
                                    setNoReservacion(event.target.value)
                                }
                            }
                            autoComplete={'off'}
                        />
                        <label htmlFor="" className={`mensaje-error ${reservacion.error ? '' : 'd-none'}`}>Numero de Reservacion Incorrecto, Intentelo de nuevo mas tarde</label>
                        <div className="boton-verificar">
                            <button className="btn btn-success" 
                            onClick={()=> dispatch(fetchReservacion(noReservacion))}
                            disabled={noReservacion.length > 0 ? false : true}
                            >Comprobar</button>
                        </div>
                       
                    </div>
                    <FormularioRegistro noReservacion={noReservacion}/>
                </div>
            </div>
        </div>
    )
}
