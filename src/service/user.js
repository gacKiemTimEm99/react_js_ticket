import axios from "axios";
import { createAction } from "../redux/action/action";
import { POST_USER_LOGIN } from "../redux/action/type";

export const login = async (data) => {
  try {
    const user = await axios.post(
      "https://test-cloud-mongodb.herokuapp.com/user/userlogin",
      data
    );
    return user;
  } catch (error) {
    throw error;
  }
};

export const register = async (data) => {
  try {
    const userRegiser = await axios.post(
      "http://test-cloud-mongodb.herokuapp.com/user/register",
      data
    );
    return userRegiser;
  } catch (error) {
    throw error;
  }
};

export const bookingTicket = async (data) => {
  try {
    const ticket = await axios.post(
      "http://test-cloud-mongodb.herokuapp.com/ticket",
      data
    );
    return ticket;
  } catch (error) {
    throw error;
  }
};

export const fetchLocalUser = () => {
  const userLogin = JSON.parse(localStorage.getItem("user"));
  return userLogin;
};
export const logout = (dispatch) => {
  localStorage.clear();
  dispatch(createAction(POST_USER_LOGIN, null));
};
