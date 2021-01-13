import axios from 'axios'

export const FETCH_RESERVACION_REQUEST = 'FETCH_RESERVACION_REQUEST'
export const FETCH_RESERVACION_SUCCESS = 'FETCH_RESERVACION_SUCCESS'
export const FETCH_RESERVACION_FAILURE = 'FETCH_RESERVACION_FAILURE'

//actions

export const fetchReservacionRequest = () =>{
    return {
        type: FETCH_RESERVACION_REQUEST,
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

//5ffe39c8d3e9d111006cf2e9
const fetchReservacion = (reservacion) =>{
    return (dispatch) => {
        dispatch(fetchReservacionRequest());
        axios.get(`https://reservaciones.app/api/reservation/${reservacion}`)
        .then(response =>{
            console.log(response)
            dispatch(fetchReservacionSuccess([response]))
        })
        .catch(error => {
            dispatch(fetchReservacionFailure([error]))
        })
    }
}

export default fetchReservacion