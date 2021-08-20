import {
  POST_SHOWN_DETAIL,
  POST_SHOWN_PLACE,
  POST_SHOWN_TICKET,
  POST_SHOWN_TIME,
} from "./action/type";

const initialState = {
  showns: [],
  shownDetail: null,
  shownTime: [],
  shownPlaces: [],
};

export const shownReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_SHOWN_TICKET:
      console.log(action.data);
      [...state.showns] = action.data;
      return { ...state };
    case POST_SHOWN_DETAIL:
      action.data
        ? (state.shownDetail = { ...action.data })
        : (state.shownDetail = null);
      return { ...state };

    case POST_SHOWN_TIME:
      [...state.shownTime] = action.data;
      return { ...state };
    case POST_SHOWN_PLACE:
      console.log("data", action.data);
      [...state.shownPlaces] = action.data;
      return { ...state };
    default:
      return state;
  }
};
