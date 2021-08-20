import {
  ADMIN_POST_PLACE,
  ADMIN_POST_SHOWN,
  ADMIN_POST_TICKET,
  ADMIN_POST_TIME,
  ADMIN_POST_USER,
} from "./action/type";

const initialState = {
  showns: [],
  shownTimes: [],
  shownPlaces: [],
  ticketBookings: [],
  users: [],
};

export const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_POST_SHOWN:
      [...state.showns] = action.data;
      return { ...state };
    case ADMIN_POST_PLACE:
      [...state.shownPlaces] = action.data;
      return { ...state };
    case ADMIN_POST_TIME:
      [...state.shownTimes] = action.data;
      return { ...state };
    case ADMIN_POST_TICKET:
      [...state.ticketBookings] = action.data;
      return { ...state };
    case ADMIN_POST_USER:
      [...state.users] = action.data;
      return { ...state };
    default:
      return state;
  }
};
