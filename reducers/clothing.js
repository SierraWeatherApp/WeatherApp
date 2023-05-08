import { SET_CLOTHING } from "../constants/constants";
const initialState = {
    'Sandals':0,
    'Boots':0,
    'Sneakers':0,
    'Rain Boots':0,
    'Pants':0,
    'Snow-pants':0,
    'Shorts':0,
    'Long Sleeved':0,
    'T-Shirt':0,
    'Hoodie':0,
    'Winter Jacket':0,
    'Light Jacket':0,
    'Cap':0,
    'Beanie':0,
    'Umbrella':0,
    'Glasses':0,
    'Skin':0,
}
const clothingReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CLOTHING: 
            return action.payload
        default:
            return state;
    }
}
export default clothingReducer;