import { actionTypes } from "../actions/types";

const initialState = {
  activeIndex: 0,
  activeToggle: false,
};

const navigationReducer = (state = initialState, { type, payload }) => {
  // console.log(state);
  switch (type) {
    case actionTypes.TAB_ACTIVE:
      return {
        ...state,
        activeIndex: payload,
      };
    case actionTypes.ACTIVE_TOGGLE:
      return {
        ...state,
        activeToggle: payload,
      };
    default:
      return state;
  }
};

export default navigationReducer;
