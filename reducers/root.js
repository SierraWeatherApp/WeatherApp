import unitReducer from "./unit";
import cityReducer from "./cities";
import deviceIDReducer from "./deviceID";
import { combineReducers } from 'redux'
import clothingReducer from "./clothing";

const rootReducer = combineReducers({
    unit: unitReducer,
    cities: cityReducer,
    deviceID: deviceIDReducer,
    clothing: clothingReducer,
})

export default rootReducer;