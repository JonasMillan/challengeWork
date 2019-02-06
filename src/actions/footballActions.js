import {API} from '../api/api'

import {  GET_FOOTBALL, GET_FOOTBALL_LOAD, GET_FOOTBALL_FAILURE } from './types'


export const fetchFootball = () => async dispatch => {
    dispatch(() => {
        return {
            type: GET_FOOTBALL_LOAD
        }
    })  
    try {
        const data = await API.footballData()
        dispatch(fetchFootballSuccess(data))
    
    } catch (error) {
        dispatch(fetchFootballFailure(error))
    }
}

const fetchFootballSuccess = data => {
    return {
        type: GET_FOOTBALL,
        payload: data
    }
}

const fetchFootballFailure = error => {
    return {
        type: GET_FOOTBALL_FAILURE,
        payload: error
    }
}
