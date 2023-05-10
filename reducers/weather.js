import { SET_WEATHER, RESET_STATE } from "../constants/constants";
const initialState = {"cities": [{"city_name": "Stockholm", "country": undefined, "hat": "head_empty", "humidity": 0, "id": 1, "jacket": "jacket_empty", "key": 1, "pants": "pants_pants", "shirt": "shirt_long-sleeve", "shoes": "shoes_sneakers", "temperature": 0, "umbrella": "umbrella_False", "weather": "mainly clear", "weathercode": 0, "windspeed": 0}]}
const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_WEATHER: 
            return action.payload
        case RESET_STATE:
            return initialState;
        default:
            return state;
    }
}
export default weatherReducer;