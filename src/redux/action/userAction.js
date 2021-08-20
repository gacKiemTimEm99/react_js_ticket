import {
  fetchListShow,
  fetchShownDetail,
  fetchShownPlaceOne,
  fetchShownTime,
} from "../../service/shown";
import { createAction } from "./action";
import {
  POST_SHOWN_DETAIL,
  POST_SHOWN_PLACE,
  POST_SHOWN_TICKET,
  POST_SHOWN_TIME,
} from "./type";

export const getListShown = (dispatch) => {
  return async () => {
    try {
      const data = await fetchListShow();
      dispatch(createAction(POST_SHOWN_TICKET, data));
    } catch (error) {
      throw error;
    }
  };
};

export const getShownDetail = (dispatch, id) => {
  return async () => {
    try {
      const data = await fetchShownDetail(id);
      dispatch(createAction(POST_SHOWN_DETAIL, data));
    } catch (error) {
      throw error;
    }
  };
};

export const getListShownTime = (dispatch) => {
  return async () => {
    try {
      const data = await fetchShownTime();

      dispatch(createAction(POST_SHOWN_TIME, data));
    } catch (error) {
      throw error;
    }
  };
};

export const getListShownPlace = (dispatch) => {
  return async () => {
    try {
      const data = await fetchShownPlaceOne();
      dispatch(createAction(POST_SHOWN_PLACE, data));
    } catch (error) {
      throw error;
    }
  };
};
