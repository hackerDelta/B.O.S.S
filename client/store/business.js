import axios from 'axios';
import { HOST_WITH_PORT } from '../../environment';

const GET_BUSINESS = 'GET_BUSINESS';

const UNMOUNT_BUSINESS = 'UNMOUNT_BUSINESS';

const getBusiness = (business) => ({
  type: GET_BUSINESS,
  business
});

export const unmountBusiness = () => ({
  type: UNMOUNT_BUSINESS
});

const defaultBusiness = {};

export const fetchBusinessFromServer = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`${HOST_WITH_PORT}/api/businesses/${id}`);
    dispatch(getBusiness(response.data));
  } catch (err) {
    console.error(err);
  }
};

export default function businessReducer(state = defaultBusiness, action) {
  switch (action.type) {
    case GET_BUSINESS:
      return action.business;
    case UNMOUNT_BUSINESS:
      return {};
    default:
      return state;
  }
}
