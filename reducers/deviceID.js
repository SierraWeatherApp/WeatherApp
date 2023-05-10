import { SET_DEVICE_ID } from "../constants/constants";
const deviceIDReducer = (state = '123', action) => {
    switch (action.type) {
        case SET_DEVICE_ID: 
            return action.payload;
        default:
            return state;
    }
}
export default deviceIDReducer;