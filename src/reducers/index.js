import { combineReducers } from 'redux'

import footballReducer from './footballReducer'
import inputReducer from './inputReducer';

const rootReducer = combineReducers({
    football: footballReducer,
    input: inputReducer
})

export default rootReducer
