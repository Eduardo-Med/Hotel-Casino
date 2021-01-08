import { combineReducers } from 'redux'
import reservacion from './reservacionReducer'
import registro from './registroReducers'
import habitacion from './habitacionReducers'

const rootReducers = combineReducers({
    reservacion,
    registro,
    habitacion
})

export default rootReducers