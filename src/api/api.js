import fetch from 'isomorphic-fetch'

const baseURL = 'https://football-players-b31f2.firebaseio.com/players.json?print=pretty'

export const API = {
    async footballData () {
        const response  = await fetch(baseURL)
        const data = await response.json()
        return data  
    }
}