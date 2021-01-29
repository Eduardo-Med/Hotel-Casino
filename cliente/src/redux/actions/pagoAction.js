import axios from 'axios'
import {alertaSinActualizar} from '../../middleware/alertas'
import fetchHabitacion from './habitacionAction'
const base_url = process.env.REACT_APP_API_HOTEL


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
        nombreCliente,
        numeroTarjeta,
        mesVencimiento,
        anoVencimiento,
        cvv,
        monto,
        habitacionNumero,
        consumos,
        informacion
    } = pagoDatos

    console.log(informacion.noReservacion)
    let mensaje
    if((!nombreCliente || nombreCliente.length < 3) || (!numeroTarjeta || numeroTarjeta.length !== 16) || !mesVencimiento || !anoVencimiento || (cvv.length < 3 ||!cvv)){
        if(cvv.length < 3 ||!cvv) mensaje='Porfavor Revise El Cvv'
        if(!anoVencimiento) mensaje='Porfavor Inserte El Año De Vencimiento'
        if(!mesVencimiento) mensaje='Porfavor Inserte El Mes De Vencimiento'
        if(!numeroTarjeta || numeroTarjeta.length !== 16) mensaje='Porfavor Revise el Numero De Tarjeta'
        if(!nombreCliente || nombreCliente.length < 3) mensaje='Porfavor Revise El Nombre'
        return (dispatch) => {
            dispatch(fetchPagoFailure([]));
            alertaSinActualizar('Pago Incorrecto', `Ocurrio Un Error ${mensaje}`, 'error', 'Aceptar')
        }
    }
    
    return (dispatch) => {
        dispatch(fetchPagoRequest());
        axios({
            method: 'post',
            url: `${base_url}/bankith`,
            data: {
                Name: nombreCliente,
                CardNumber: numeroTarjeta,
                Year: parseInt(anoVencimiento),
                Month: parseInt(mesVencimiento),
                Cvv: parseInt(cvv),
                Amount: parseInt(monto),
                Description: `Pago de Salida del hotel de ${informacion.nombre} de la habitacion ${habitacionNumero}`
            }
        })
        .then((response) =>{
            axios({
                method: 'post',
                url: `${base_url}/consumoTotal/${habitacionNumero}`,
                data: {
                    precio: monto,
                    noTarjetas: `************${numeroTarjeta.substr(12,16)}`,
                }
            })
            .then((response) => {
                axios({
                    url: `${base_url}/checkOut/download/factura`,
                    method: 'POST',
                    data: {
                        consumos,
                        informacion,
                        monto,
                        habitacionNumero,
                        noTarjetas: `************${numeroTarjeta.substr(12,16)}`
                    },
                    responseType: 'blob',
                }).then((response) => {
                    const url = window.URL.createObjectURL(new Blob([response.data]));
                    const link = document.createElement('a');
                    link.href = url;
                    link.setAttribute('download', `Factura-Habitacion-${habitacionNumero}.pdf`); //or any other extension
                    document.body.appendChild(link);
                    link.click();
                    dispatch(fetchPagoSuccess([response]))
                    axios.delete(`${base_url}/checkOut/${habitacionNumero}`).then((response => {
                        axios.delete(`https://www.reservaciones.app/api/reservation/${informacion.noReservacion}`)
                        axios.delete(`https://hotel-casino-backend.herokuapp.com/api/reservacion/borrar/${informacion.noReservacion}`)
                        dispatch(fetchHabitacion())
                    }))
                    alertaSinActualizar('Pago Correcto', 'Pago realizado correctamente', 'success', 'Aceptar')
                })
                .catch(error => {
                    dispatch(fetchPagoFailure([error]))
                    alertaSinActualizar('Pago Incorrecto', 'Ocurrio un error al realizar el pago revice su información', 'error', 'Aceptar') 
                })
            })
            .catch(error =>{
                dispatch(fetchPagoFailure([error]))
                alertaSinActualizar('Pago Incorrecto', 'Ocurrio un error al realizar el pago revice su información', 'error', 'Aceptar') 
            })
        })
        .catch(error =>{
            dispatch(fetchPagoFailure([error.response]))
            alertaSinActualizar('Pago Incorrecto', `${error.response.data}` , 'error', 'Aceptar') 
        })
    }
}

export default fetchPago