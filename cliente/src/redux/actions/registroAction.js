import axios from 'axios'
import {alerta} from '../../middleware/alertas'

export const FETCH_REGISTRO_REQUEST = 'FETCH_REGISTRO_REQUEST'
export const FETCH_REGISTRO_SUCCESS = 'FETCH_REGISTRO_SUCCESS'
export const FETCH_REGISTRO_FAILURE = 'FETCH_REGISTRO_FAILURE'

//actions

export const fetchRegistroRequest = () =>{
    return {
        type: FETCH_REGISTRO_REQUEST
    }
}


export const fetchRegistroSuccess = (registro) =>{
    return {
        type: FETCH_REGISTRO_SUCCESS,
        payload: registro
    }
}

export const fetchRegistroFailure = (error) =>{
    return {
        type: FETCH_REGISTRO_FAILURE,
        payload: error
    }
}


const fetchRegistro = (registro) =>{
    const {
        nombre,
        correo,
        telefono,
        fechaInicio,
        fechaSalida,
        hora,
        noHabitacion,
        cantidadPersonas
    } = registro

    return (dispatch) => {
        dispatch(fetchRegistroRequest());
        axios({
            method: 'post',
            url: `http://localhost:5000/api/v1/registro`,
            data:{
                nombre,
                correo,
                telefono,
                fechaInicio,
                fechaSalida,
                hora,
                noHabitacion,
                cantidadPersonas
            }
        })
        .then(response =>{
            dispatch(fetchRegistroSuccess([response]))
            alerta('Registro Correcto', 'Registro realizado correctamente', 'success', 'Aceptar') 
        })
        .catch(error => {
            dispatch(fetchRegistroFailure([error]))
            alerta('Registro Incorrecto', 'Ocurrio un error al realizar el registro', 'error', 'Aceptar') 
        })
    }
}

export default fetchRegistro