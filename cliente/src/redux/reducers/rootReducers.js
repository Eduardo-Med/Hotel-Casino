import { combineReducers } from 'redux'
import reservacion from './reservacionReducer'
import registro from './registroReducers'

const rootReducers = combineReducers({
    reservacion,
    registro
})

export default rootReducers