import { SET_DEVICE_ID } from "../constants/constants";

export const setDeviceID = id => ({
    type: SET_DEVICE_ID,
    payload: id
  })