import { combineReducers } from "redux";
import { shownReducer } from "./shownReducer";
import { ticketReducer } from "./ticketReducer";
import { userReducer } from "./userReducer";
import { adminReducer } from "./adminReducer";

export const rootReducer = combineReducers({
  shownReducer,
  ticketReducer,
  userReducer,
  adminReducer,
});
