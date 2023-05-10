import unitReducer from "./unit";
import cityReducer from "./cities";
import deviceIDReducer from "./deviceID";
import { combineReducers } from 'redux'
import clothingReducer from "./clothing";
import weatherReducer from "./weather";

const rootReducer = combineReducers({
    unit: unitReducer,
    cities: cityReducer,
    deviceID: deviceIDReducer,
    clothing: clothingReducer,
    weather: weatherReducer,
})

export default rootReducer;