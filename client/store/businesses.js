import axios from 'axios';
// import { HOST_WITH_PORT } from '../../environment';

const GET_BUSINESSES = 'GET_BUSINESSES';

const getBusinesses = (businesses) => ({
  type: GET_BUSINESSES,
  businesses
});

const defaultBusinesses = [];

export const fetchBusinessesFromServer = () => async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:3001/api/businesses`);
    dispatch(getBusinesses(response.data));
  } catch (err) {
    console.error(err);
  }
};

export default function businessesReducer(state = defaultBusinesses, action) {
  switch (action.type) {
    case GET_BUSINESSES:
      return action.businesses;
    default:
      return state;
  }
}
