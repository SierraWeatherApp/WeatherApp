import { DELETE_CITY, SET_CITIES, RESET_STATE } from "../constants/constants";

export const setCities = items => ({
    type: SET_CITIES,
    payload: items
  })
export const deleteCity = id => ({
    type: DELETE_CITY,
    payload: id
  })
export const resetCities = () => ({
  type: RESET_STATE,
})
