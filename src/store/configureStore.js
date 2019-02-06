import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers'

const enhancer = composeWithDevTools(
    applyMiddleware(thunk, createLogger())
)

export default function configureStore (initialState) {
    return createStore(rootReducer, initialState, enhancer)
}