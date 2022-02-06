import { actionTypes } from "../actions/types";

const initialState = {
  activeIndex: 0,
  focused: false,
};

const navigationReducer = (state = initialState, { type, payload }) => {
  console.log(state);
  switch (type) {
    case actionTypes.TAB_ACTIVE:
      return {
        ...state,
        activeIndex: payload,
      };

    default:
      return state;
  }
};

export default navigationReducer;
