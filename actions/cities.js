import { SET_CITIES } from "../constants/constants";

export const setCities = items => ({
    type: SET_CITIES,
    payload: items
  })