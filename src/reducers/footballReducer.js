import {  GET_FOOTBALL, GET_FOOTBALL_LOAD, GET_FOOTBALL_FAILURE } from '../actions/types'
import initialState from './initialState'

export default function footballReducer(state = initialState.football, action) {
    switch (action.type) {
        case GET_FOOTBALL:
            return {
                ...state,
                data: action.payload
            }
        case GET_FOOTBALL_LOAD:
            return {
                ...state,
                loading: true,
                error: false
            }
        case GET_FOOTBALL_FAILURE:
            return {
                ...state,
                loading: true,
                error: action.payload
            }
        default:
            return state
    }
}
