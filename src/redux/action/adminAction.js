import {
  fetchListShow,
  fetchListUser,
  fetchShownsTime,
  fetchShowsPlace,
  fetchTicketBooking,
} from "../../service/admin";
import { createAction } from "./action";
import {
  ADMIN_POST_PLACE,
  ADMIN_POST_SHOWN,
  ADMIN_POST_TICKET,
  ADMIN_POST_TIME,
  ADMIN_POST_USER,
} from "./type";

export const getListShown = (dispatch) => {
  return async () => {
    try {
      const data = await fetchListShow();
      dispatch(createAction(ADMIN_POST_SHOWN, data));
    } catch (error) {
      throw error;
    }
  };
};

export const getShownsTime = (dispatch) => {
  return async () => {
    try {
      const data = await fetchShownsTime();
      dispatch(createAction(ADMIN_POST_TIME, data));
    } catch (error) {
      throw error;
    }
  };
};

export const getShownsPlace = (dispatch) => {
  return async () => {
    try {
      const data = await fetchShowsPlace();
      dispatch(createAction(ADMIN_POST_PLACE, data));
    } catch (error) {
      throw error;
    }
  };
};

export const getListTicket = (dispatch) => {
  return async () => {
    try {
      const data = await fetchTicketBooking();
      dispatch(createAction(ADMIN_POST_TICKET, data));
    } catch (error) {
      throw error;
    }
  };
};

export const getListUser = (dispatch) => {
  return async () => {
    try {
      const data = await fetchListUser();
      dispatch(createAction(ADMIN_POST_USER, data));
    } catch (error) {
      throw error;
    }
  };
};
