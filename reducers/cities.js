import { SET_CITIES } from "../constants/constants";
const cityReducer = (state = ['tim'], action) => {
    switch (action.type) {
        case SET_CITIES: 
            return {
              cities: action.payload
            }
        default:
            return state;
    }
}
export default cityReducer;