import {  GET_INPUT, GET_INPUT_LOAD, GET_INPUT_FAILURE } from '../actions/types'
import initialState from './initialState'

export default function inputReducer(state = initialState.input, action) {
    switch (action.type) {
        case GET_INPUT:
            return {
                ...state,
                inputData: action.payload
            }
        case GET_INPUT_LOAD:
            return {
                ...state,
                loading: true,
                error: false
            }
        case GET_INPUT_FAILURE:
            return {
                ...state,
                loading: true,
                error: action.payload
            }
        default:
            return state
    }
}
