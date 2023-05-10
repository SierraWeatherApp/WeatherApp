import { SET_WEATHER } from "../constants/constants";

export const setWeather = items => ({
    type: SET_WEATHER,
    payload: items
  })
