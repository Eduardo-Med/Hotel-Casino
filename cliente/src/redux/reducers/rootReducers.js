import { combineReducers } from 'redux'
import reservacion from './reservacionReducer'
import registro from './registroReducers'
import habitacion from './habitacionReducers'
import pago from './pagoReducers'

const rootReducers = combineReducers({
    reservacion,
    registro,
    habitacion,
    pago
})

export default rootReducers