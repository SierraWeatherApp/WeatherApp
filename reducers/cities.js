import { DELETE_CITY, SET_CITIES, RESET_STATE } from "../constants/constants";
const initialState = {"cities": [{"city_name": "Stockholm", "country": undefined, "hat": "head_empty", "humidity": 0, "id": 1, "jacket": "jacket_empty", "key": 1, "pants": "pants_pants", "shirt": "shirt_long-sleeve", "shoes": "shoes_sneakers", "temperature": 0, "umbrella": "umbrella_False", "weather": "mainly clear", "weathercode": 0, "windspeed": 0}]}
const cityReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CITIES: 
            return {
              cities: action.payload
            }
        case DELETE_CITY:
            const id = action.payload
            const oldData = state.cities
            var newData = []
            oldData.forEach((element) => {
                if(element['id'] != id)
                newData.push(element)
            });
            console.log('deleted')
            return {cities: newData}
        case RESET_STATE:
            return initialState;
        default:
            return state;
    }
}
export default cityReducer;