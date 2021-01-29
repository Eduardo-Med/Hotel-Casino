import {FETCH_AUTENTICACION_CAMBIAR} from '../actions/autenticationAction'

const initialState = {
    usuario: false,
}


const AUTENTICACION = (state = initialState, action) => {
    switch(action.type){
        case FETCH_AUTENTICACION_CAMBIAR:
            return{
                usuario: action.payload,
            }
        default: return state
    }
}

export default AUTENTICACION