import {FETCH_RESERVACION_FAILURE,FETCH_RESERVACION_SUCCESS,FETCH_RESERVACION_REQUEST} from '../actions/reservacionAction'

const initialState = {
    loading: false,
    reservacion: [],
    error: ''
}


const reservacion = (state = initialState, action) => {
    switch(action.type){
        case FETCH_RESERVACION_REQUEST:
            return{
                ...state,
                loading:true
            }
        case FETCH_RESERVACION_SUCCESS:
            return {
                loading: false,
                reservacion: action.payload,
                error: ''
            }
        case FETCH_RESERVACION_FAILURE:
            return {
                loading: false,
                reservacion: [],
                error: action.payload
            }
        default: return state
    }
}

export default reservacion