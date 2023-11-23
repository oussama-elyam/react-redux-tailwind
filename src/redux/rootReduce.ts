import { combineReducers } from "@reduxjs/toolkit";
import AuthReducer from "./auth/auth-slice";

const rootReducer = combineReducers({
  auth: AuthReducer,
});
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
