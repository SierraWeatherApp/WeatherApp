import { SET_CLOTHING } from "../constants/constants";

export const setClothing = items => ({
    type: SET_CLOTHING,
    payload: items
  })