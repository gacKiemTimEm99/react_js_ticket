import { POST_USER_LOGIN } from "./action/type";

const initialState = {
  user: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_USER_LOGIN:
      if (action.data !== null) state.user = { ...action.data };
      else state.user = null;
      return { ...state };
    default:
      return state;
  }
};
