import { actionTypes } from "./types";

export const tabActive = (value) => {
  return {
    type: actionTypes.TAB_ACTIVE,
    payload: value,
  };
};
