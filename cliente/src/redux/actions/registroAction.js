import axios from 'axios'

export const FETCH_REGISTRO_REQUEST = 'FETCH_REGISTRO_REQUEST'
export const FETCH_REGISTRO_SUCCESS = 'FETCH_REGISTRO_SUCCESS'
export const FETCH_REGISTRO_FAILURE = 'FETCH_REGISTRO_FAILURE'

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
        precio,
        cantPersonas,
    } = registro

    return (dispatch) => {
        dispatch(fetchRegistroRequest());
        axios({
                method: 'post',
                url: `http://localhost:5000/api/checkIn`,
                data: {
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
            .then(response => {
                dispatch(fetchRegistroSuccess([response]))
            })
            .catch(error => {
                dispatch(fetchRegistroFailure([error]))
            })
    }
}

export default fetchRegistro