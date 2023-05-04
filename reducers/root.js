import unitReducer from "./unit";
import cityReducer from "./cities";
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    unit: unitReducer,
    cities: cityReducer,
})

export default rootReducer;