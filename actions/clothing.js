import { SET_CLOTHING, RESET_STATE } from "../constants/constants";

export const setClothing = items => ({
    type: SET_CLOTHING,
    payload: items
  })
export const resetClothing = () => ({
  type: RESET_STATE,
})