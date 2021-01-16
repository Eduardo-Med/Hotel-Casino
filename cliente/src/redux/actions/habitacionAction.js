import axios from 'axios'

export const FETCH_HABITACION_REQUEST = 'FETCH_HABITACION_REQUEST'
export const FETCH_HABITACION_SUCCESS = 'FETCH_HABITACION_SUCCESS'
export const FETCH_HABITACION_FAILURE = 'FETCH_HABITACION_FAILURE'
const base_url = process.env.REACT_APP_API_HOTEL

//actions

export const fetchHabitacionRequest = () =>{
    return {
        type: FETCH_HABITACION_REQUEST,
    }
}


export const fetchHabitacionSuccess = (habitacion) =>{
    return {
        type: FETCH_HABITACION_SUCCESS,
        payload: habitacion
    }
}

export const fetchHabitacionFailure = (error) =>{
    return {
        type: FETCH_HABITACION_FAILURE,
        payload: error
    }
}


const fetchHabitacion = () =>{
    return (dispatch) => {
        dispatch(fetchHabitacionRequest());
        axios.get(`${base_url}/habitacion`)
        .then(response =>{
            dispatch(fetchHabitacionSuccess([response.data]))
        })
        .catch(error => {
            dispatch(fetchHabitacionFailure([error]))
        })
    }
}

export default fetchHabitacion