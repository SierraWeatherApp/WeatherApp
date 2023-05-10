import { CELCIUS, FAHRENHEIT } from "../constants/constants";
const unitReducer = (state = 'celcius', action) => {
    switch (action.type) {
        case CELCIUS: 
            return 'celcius';
        case FAHRENHEIT:
            return 'fahrenheit';
        default:
            return state;
    }
}
export default unitReducer;