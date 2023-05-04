import { DELETE_CITY, SET_CITIES } from "../constants/constants";
const cityReducer = (state = ['tim'], action) => {
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
        default:
            return state;
    }
}
export default cityReducer;