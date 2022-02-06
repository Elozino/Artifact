import { combineReducers } from "redux";
import navigationReducer from "./navigationReducer";

const rootReducer = combineReducers({
  navigationReducer,
});

export default rootReducer;
