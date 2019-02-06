import { createSelector } from 'reselect'

const age = DOB => {
    let today = new Date();
    let birthDate = new Date(DOB);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age = age - 1;
    }
		
    return age.toString();
}

const inputData = state => state.input.inputData
const fotballData = state => state.football.data

const filterPlayers = (query, data) => {

    if(data.length > 0){
        if(query.name === '' && query.position === '' && query.age === ''){
            return data
        }
        let finalData = data.find(e =>  e.name === query.name && e.position === query.position && age(e.dateOfBirth) === query.age)
        
        if(finalData){
            return [finalData]
        }else{
            return 'empty'
        }
        
        
    }
}

export default createSelector(
    inputData,
    fotballData,
    filterPlayers
)