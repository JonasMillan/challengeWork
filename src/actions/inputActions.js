import {  GET_INPUT, GET_INPUT_LOAD, GET_INPUT_FAILURE } from './types'

export const takeInput = inputData => async dispatch => {
    dispatch(() => {
        return {
            type: GET_INPUT_LOAD
        }
    })  
    try {    
        dispatch(inputSuccess(inputData))
    } catch (error) {
        dispatch(inputFailure(error))
    }
}

const inputSuccess = data => {
    return {
        type: GET_INPUT,
        payload: data
    }
}

const inputFailure = error => {
    return {
        type: GET_INPUT_FAILURE,
        payload: error
    }
}
