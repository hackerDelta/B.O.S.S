import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import { HOST_WITH_PORT } from '../../environment';

const initialState = {};

const GET_USER = 'GET_USER';

const getUser = (user) => ({ type: GET_USER, user });

export const me = () => async (dispatch) => {
  try {
    const res = await axios.get(`${HOST_WITH_PORT}/auth/me`);
    dispatch(getUser(res.data || initialState));
  } catch (err) {
    console.error(err);
  }
};
export const authsignup = (firstName, lastName, email, password) => async (
  dispatch
) => {
  let response;

  try {
    response = await axios.post(`${HOST_WITH_PORT}/auth/signup`, {
      firstName,
      lastName,
      email,
      password
    });
    Actions.businesses();
  } catch (authError) {
    return dispatch(getUser({ error: authError }));
  }
  try {
    dispatch(getUser(response.data));
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr);
  }
};

export const authlogin = (email, password) => async (dispatch) => {
  let response;
  try {
    response = await axios.post(`${HOST_WITH_PORT}/auth/login`, {
      email,
      password
    });
    Actions.businesses();
  } catch (authError) {
    return dispatch(getUser({ error: authError }));
  }

  try {
    dispatch(getUser(response.data));
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr);
  }
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return action.user;
    default:
      return state;
  }
}
