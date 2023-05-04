import unitReducer from "./unit";
import cityReducer from "./cities";
import deviceIDReducer from "./deviceID";
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    unit: unitReducer,
    cities: cityReducer,
    deviceID: deviceIDReducer,
})

export default rootReducer;