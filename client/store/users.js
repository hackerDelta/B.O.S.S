import axios from 'axios';

const GET_USERS = 'GET_USERS';

const REMOVE_USER = 'REMOVE_USER';

const UPDATE_USER = 'UPDATE_USER';

const CREATE_USER = 'CREATE_USER';

const getUsers = (users) => ({
  type: GET_USERS,
  users
});

const createUser = (user) => ({
  type: CREATE_USER,
  user
});

const removeUser = (id) => ({
  type: REMOVE_USER,
  id
});

const updateUser = (id, user) => ({
  type: UPDATE_USER,
  id,
  user
});

const defaultUsers = [];

export const fetchUsersFromServer = () => async (dispatch) => {
  try {
    const response = await axios.get(
      'https://hackerdelta-capstone.herokuapp.com/api/users'
    );
    dispatch(getUsers(response.data));
  } catch (err) {
    console.log(err);
  }
};

export const removeUserFromServer = (id) => async (dispatch) => {
  try {
    await axios.delete(
      `https://hackerdelta-capstone.herokuapp.com/api/users/${id}`
    );
    dispatch(removeUser(id));
  } catch (err) {
    console.log(err);
  }
};

export const updateUserFromServer = (id, user) => async (dispatch) => {
  try {
    const response = await axios.put(
      `https://hackerdelta-capstone.herokuapp.com/api/users/${id}`,
      user
    );
    dispatch(updateUser(response.data));
  } catch (err) {
    console.log(err);
  }
};

export const createUserFromServer = (id, user) => async (dispatch) => {
  try {
    const response = await axios.post(
      'https://hackerdelta-capstone.herokuapp.com/api/users/',
      user
    );
    dispatch(createUser(response.data));
  } catch (err) {
    console.log(err);
  }
};

export default function usersReducer(state = defaultUsers, action) {
  switch (action.type) {
    case GET_USERS:
      return action.users;
    case UPDATE_USER:
      return state.map((user) => (user.id === action.id ? action.user : user));
    case REMOVE_USER:
      return state.filter((user) => user.id !== action.id);
    case CREATE_USER:
      return [...state, action.user];
    default:
      return state;
  }
}
