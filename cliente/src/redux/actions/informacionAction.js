import axios from 'axios'
import {alerta} from '../../middleware/alertas'

export const FETCH_INFORMACION_REQUEST = 'FETCH_INFORMACION_REQUEST'
export const FETCH_INFORMACION_SUCCESS = 'FETCH_INFORMACION_SUCCESS'
export const FETCH_INFORMACION_FAILURE = 'FETCH_INFORMACION_FAILURE'

//actions

export const fetchInformacionRequest = () => {
    return {
        type: FETCH_INFORMACION_REQUEST
    }
}


export const fetchInformacionSuccess = (informacion) => {
    return {
        type: FETCH_INFORMACION_SUCCESS,
        payload: informacion
    }
}

export const fetchInformacionFailure = (error) => {
    return {
        type: FETCH_INFORMACION_FAILURE,
        payload: error
    }
}


const fetchInformacion = (numeroHabitacion) => {
    return (dispatch) => {
        dispatch(fetchInformacionRequest());
        axios.get(`http://localhost:5000/api/v1/infoclientente/${numeroHabitacion}`)
        .then(response =>{
            dispatch(fetchInformacionSuccess([response.data.datosHuesped]))
            alerta('Registro Correcto', 'Registro realizado correctamente', 'success', 'Aceptar') 
        })
        .catch(error => {
            dispatch(fetchInformacionFailure([error]))
            alerta('Registro Incorrecto', 'Ocurrio un error al realizar el registro', 'error', 'Aceptar') 
        })
    }
}

export default fetchInformacion