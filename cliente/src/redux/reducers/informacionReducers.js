import {FETCH_INFORMACION_REQUEST,FETCH_INFORMACION_SUCCESS,FETCH_INFORMACION_FAILURE} from '../actions/informacionAction'

const initialState = {
    loading: false,
    informacion: [],
    error: ''
}


const informacion = (state = initialState, action) => {
    switch(action.type){
        case FETCH_INFORMACION_REQUEST:
            return{
                ...state,
                loading:true
            }
        case FETCH_INFORMACION_SUCCESS:
            return {
                loading: false,
                informacion: action.payload,
                error: ''
            }
        case FETCH_INFORMACION_FAILURE:
            return {
                loading: false,
                informacion: [],
                error: action.payload
            }
        default: return state
    }
}

export default informacion