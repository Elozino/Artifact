import { actionTypes } from "./types";

export const tabActive = (value) => {
  return {
    type: actionTypes.TAB_ACTIVE,
    payload: value,
  };
};

export const switchToggle = (value) => {
  return {
    type: actionTypes.ACTIVE_TOGGLE,
    payload: value,
  };
};
