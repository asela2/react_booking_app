import { combineReducers } from "redux";
import { authReducer } from "./authReducer";

// combine multiple reducers
const rootReducer = combineReducers({
  user: authReducer,
});

export default rootReducer;
