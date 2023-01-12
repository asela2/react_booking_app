import { combineReducers } from "redux";

// combine multiple reducers
export const rootReducer = combineReducers({
  user: authReducer,
});
