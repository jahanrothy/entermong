import { combineReducers } from "@reduxjs/toolkit";
import ProfileReducer from "./features/dashboard/profileSlice.ts";
import AuthReducer from "./features/auth/authSlice.ts";
import LoginReducer from "./features/auth/loginSlice.ts";
import UserReducer from "./features/dashboard/userSlice.ts";

const rootReducer = combineReducers({
  login   : LoginReducer,
  auth    : AuthReducer,
  profile : ProfileReducer,
  user    : UserReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
