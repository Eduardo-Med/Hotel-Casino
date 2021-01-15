import axios from 'axios'
import {alertaSinActualizar,alerta} from '../../middleware/alertas'

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


const fetchPago = (pagoDatos) => {
    const {
        // nombreCliente,
        numeroTarjeta,
        // mesVencimiento,
        // anoVencimiento,
        // cvv,
        monto,
        habitacionNumero
    } = pagoDatos
    console.log(habitacionNumero)
    return (dispatch) => {
        dispatch(fetchPagoRequest());
        axios({
                method: 'post',
                url: `http://localhost:4000/api/consumoTotal/${habitacionNumero}`,
                data: {
                    precio: monto,
                    noTarjetas: `${numeroTarjeta.substr(0,4)}************`,
                }
            })
            axios.get(`http://localhost:4000/api/habitacion`)
            .then((response) =>{
                dispatch(fetchPagoSuccess([response]))
                axios({
                    url: `http://localhost:4000/api/checkOut/download/factura`,
                    method: 'GET',
                    responseType: 'blob',
                }).then((response) => {
                    const url = window.URL.createObjectURL(new Blob([response.data]));
                    const link = document.createElement('a');
                    link.href = url;
                    link.setAttribute('download', 'Factura.docx'); //or any other extension
                    document.body.appendChild(link);
                    link.click();
                    alerta('Pago Correcto', 'Pago realizado correctamente', 'success', 'Aceptar')
                })
                .catch(error => {
                    dispatch(fetchPagoFailure([error]))
                    alertaSinActualizar('A ocurrido un error', 'No se logro descargar la factura', 'error', 'Aceptar') 
                })
            })
            .catch(error => {
                dispatch(fetchPagoFailure([error]))
                alertaSinActualizar('Pago Incorrecto', 'Ocurrio un error al realizar el pago revice su información', 'error', 'Aceptar') 
            })
    }
}

export default fetchPago