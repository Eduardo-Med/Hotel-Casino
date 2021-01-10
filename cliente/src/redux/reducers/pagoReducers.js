import {FETCH_PAGO_REQUEST,FETCH_PAGO_SUCCESS,FETCH_PAGO_FAILURE} from '../actions/pagoAction'

const initialState = {
    loading: false,
    pago: [],
    error: ''
}


const pago = (state = initialState, action) => {
    switch(action.type){
        case FETCH_PAGO_REQUEST:
            return{
                ...state,
                loading:true
            }
        case FETCH_PAGO_SUCCESS:
            return {
                loading: false,
                pago: action.payload,
                error: ''
            }
        case FETCH_PAGO_FAILURE:
            return {
                loading: false,
                pago: [],
                error: action.payload
            }
        default: return state
    }
}

export default pago