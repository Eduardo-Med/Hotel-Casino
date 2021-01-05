import axios from 'axios'

export const FETCH_RESERVACION_REQUEST = 'FETCH_RESERVACION_REQUEST'
export const FETCH_RESERVACION_SUCCESS = 'FETCH_RESERVACION_SUCCESS'
export const FETCH_RESERVACION_FAILURE = 'FETCH_RESERVACION_FAILURE'

//actions

export const fetchReservacionRequest = () =>{
    return {
        type: FETCH_RESERVACION_REQUEST
    }
}


export const fetchReservacionSuccess = (reservacion) =>{
    return {
        type: FETCH_RESERVACION_SUCCESS,
        payload: reservacion
    }
}

export const fetchReservacionFailure = (error) =>{
    return {
        type: FETCH_RESERVACION_FAILURE,
        payload: error
    }
}


const fetchReservacion = (reservacion) =>{
    return (dispatch) => {
        dispatch(fetchReservacionRequest);
        axios.get(`http://localhost:5000/api/v1/reservacion/${reservacion}`)
        .then(response =>{
            dispatch(fetchReservacionSuccess([response.data.datosHuesped]))
        })
        .catch(error => {
            dispatch(fetchReservacionFailure([error]))
        })
    }
}

export default fetchReservacion