import axios from 'axios';

/**
 * ACTION TYPES
 */
const GET_USER = 'GET_USER';
const REMOVE_USER = 'REMOVE_USER';

/**
 * INITIAL STATE
 */
const initialState = {};

/**
 * ACTION CREATORS
 */

const getUser = (user) => ({ type: GET_USER, user });
// const removeUser = () => ({ type: REMOVE_USER });

/**
 * THUNK CREATORS
 */

export const me = () => async (dispatch) => {
  try {
    const res = await axios.get('/auth/me');
    dispatch(getUser(res.data || initialState));
  } catch (err) {
    console.error(err);
  }
};

export const auth = (email, password, method) => async (dispatch) => {
  console.log('****', email, password, method);
  try {
    await axios.post(`/auth/login`, { email, password });
  } catch (authError) {
    return dispatch(getUser({ error: authError }));
  }
};
/**
 * REDUCER
 */
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return action.user;
    case REMOVE_USER:
      return initialState;
    default:
      return state;
  }
}
