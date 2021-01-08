import {FETCH_HABITACION_FAILURE,FETCH_HABITACION_SUCCESS,FETCH_HABITACION_REQUEST} from '../actions/habitacionAction'

const initialState = {
    loading: false,
    habitacion: [],
    error: ''
}


const habitacion = (state = initialState, action) => {
    switch(action.type){
        case FETCH_HABITACION_REQUEST:
            return{
                ...state,
                loading:true
            }
        case FETCH_HABITACION_SUCCESS:
            return {
                loading: false,
                habitacion: action.payload,
                error: ''
            }
        case FETCH_HABITACION_FAILURE:
            return {
                loading: false,
                habitacion: [],
                error: action.payload
            }
        default: return state
    }
}

export default habitacion