import {FETCH_REGISTRO_REQUEST,FETCH_REGISTRO_SUCCESS,FETCH_REGISTRO_FAILURE} from '../actions/registroAction'

const initialState = {
    loading: false,
    reservacion: [],
    error: ''
}


const registro = (state = initialState, action) => {
    switch(action.type){
        case FETCH_REGISTRO_REQUEST:
            return{
                ...state,
                loading:true
            }
        case FETCH_REGISTRO_SUCCESS:
            return {
                loading: false,
                registro: action.payload,
                error: ''
            }
        case FETCH_REGISTRO_FAILURE:
            return {
                loading: false,
                registro: [],
                error: action.payload
            }
        default: return state
    }
}

export default registro