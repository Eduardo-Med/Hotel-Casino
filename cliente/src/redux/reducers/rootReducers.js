import { combineReducers } from 'redux'
import reservacion from './reservacionReducer'
import registro from './registroReducers'
import habitacion from './habitacionReducers'
import pago from './pagoReducers'
import informacion from './informacionReducers'

const rootReducers = combineReducers({
    reservacion,
    registro,
    habitacion,
    pago,
    informacion
})

export default rootReducers