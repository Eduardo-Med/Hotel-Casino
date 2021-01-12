import axios from 'axios'
import {alerta} from '../../middleware/alertas'
import io from 'socket.io-client'
import fetchHabitacion from './habitacionAction'

export const FETCH_REGISTRO_REQUEST = 'FETCH_REGISTRO_REQUEST'
export const FETCH_REGISTRO_SUCCESS = 'FETCH_REGISTRO_SUCCESS'
export const FETCH_REGISTRO_FAILURE = 'FETCH_REGISTRO_FAILURE'
const ENDPOINT = "http://localhost:4000"

let socket

//actions

export const fetchRegistroRequest = () => {
    return {
        type: FETCH_REGISTRO_REQUEST
    }
}


export const fetchRegistroSuccess = (registro) => {
    return {
        type: FETCH_REGISTRO_SUCCESS,
        payload: registro
    }
}

export const fetchRegistroFailure = (error) => {
    return {
        type: FETCH_REGISTRO_FAILURE,
        payload: error
    }
}


const fetchRegistro = (registro) => {
    const {
        nombre,
        telefono,
        correo,
        fechaEntrada,
        fechaSalida,
        noHabSencilla,
        noHabDoble,
        noHabMatrimonial,
        noHabSuite,
        cantPersonas,
    } = registro.reservacion
    const {noReservacion, precio} = registro

    return (dispatch) => {
        dispatch(fetchRegistroRequest());
        socket = io(ENDPOINT)
        socket.emit("actualizarHabs", "Conectadooo")
        axios({
                method: 'post',
                url: `http://localhost:4000/api/checkIn`,
                data: {
                    noReservacion,
                    nombre,
                    telefono,
                    correo,
                    fechaEntrada,
                    fechaSalida,
                    noHabSencilla,
                    noHabDoble,
                    noHabMatrimonial,
                    noHabSuite,
                    precio,
                    cantPersonas,
                }
            })
            .then(response =>{
                dispatch(fetchRegistroSuccess([response]))
                fetchHabitacion()
                alerta('Registro Correcto', 'Registro realizado correctamente', 'success', 'Aceptar')
               
            })
            .catch(error => {
                dispatch(fetchRegistroFailure([error]))
                alerta('Registro Incorrecto', 'Ocurrio un error al realizar el registro', 'error', 'Aceptar') 
            })
    }
}

export default fetchRegistro