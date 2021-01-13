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

//5ffe39c8d3e9d111006cf2e9

const fetchRegistro = (registro) => {
    const {
        entryDate,
        leavingDate,
    } = registro.reservacion.reservation
    const {
        simple,
        double,
        master,
        suite
    } = registro.reservacion.reservation.rooms
    const {
        name,
        maternalSurname,
        paternalSurname,
        phone,
        email
    } = registro.reservacion.user
    const {noReservacion, precio} = registro
    console.log(registro.reservacion.reservation)
    console.log(registro.reservacion.reservation.rooms)
    console.log(registro.reservacion.user)
    console.log(registro.reservacion)
    return (dispatch) => {
        dispatch(fetchRegistroRequest());
        socket = io(ENDPOINT)
        socket.emit("actualizarHabs", "Conectadooo")
        axios({
                method: 'post',
                url: `http://localhost:4000/api/checkIn`,
                data: {
                    noReservacion,
                    nombre:`${name} ${maternalSurname} ${paternalSurname}`,
                    telefono: phone,
                    correo: email,
                    fechaEntrada: entryDate.substr(0,10),
                    fechaSalida: leavingDate.substr(0,10),
                    noHabSencilla: simple,
                    noHabDoble: double,
                    noHabMatrimonial: master,
                    noHabSuite:suite,
                    precio,
                    cantPersonas:2,
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