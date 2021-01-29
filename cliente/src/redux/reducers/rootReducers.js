import { combineReducers } from 'redux'
import reservacion from './reservacionReducer'
import registro from './registroReducers'
import habitacion from './habitacionReducers'
import pago from './pagoReducers'
import autenticacion from './autenticacionReducers'

const rootReducers = combineReducers({
    reservacion,
    registro,
    habitacion,
    pago,
    autenticacion
})

export default rootReducers