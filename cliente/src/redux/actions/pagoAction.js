import axios from 'axios'
import {alerta} from '../../middleware/alertas'

export const FETCH_PAGO_REQUEST = 'FETCH_PAGO_REQUEST'
export const FETCH_PAGO_SUCCESS = 'FETCH_PAGO_SUCCESS'
export const FETCH_PAGO_FAILURE = 'FETCH_PAGO_FAILURE'

//actions

export const fetchPagoRequest = () => {
    return {
        type: FETCH_PAGO_REQUEST
    }
}


export const fetchPagoSuccess = (pago) => {
    return {
        type: FETCH_PAGO_SUCCESS,
        payload: pago
    }
}

export const fetchPagoFailure = (error) => {
    return {
        type: FETCH_PAGO_FAILURE,
        payload: error
    }
}


const fetchPago = (pago) => {
    const {
        nombreCliente,
        numeroTarjeta,
        mesVencimiento,
        anoVencimiento,
        cvv,
    } = pago

    return (dispatch) => {
        dispatch(fetchPagoRequest());
        axios({
                method: 'post',
                url: `http://localhost:5000/api/v1/pago`,
                data: {
                    nombreCliente,
                    numeroTarjeta,
                    mesVencimiento,
                    anoVencimiento,
                    cvv,
                }
            })
            .then(response =>{
                dispatch(fetchPagoSuccess([response]))
                alerta('Registro Correcto', 'Registro realizado correctamente', 'success', 'Aceptar') 
            })
            .catch(error => {
                dispatch(fetchPagoFailure([error]))
                alerta('Registro Incorrecto', 'Ocurrio un error al realizar el registro', 'error', 'Aceptar') 
            })
    }
}

export default fetchPago