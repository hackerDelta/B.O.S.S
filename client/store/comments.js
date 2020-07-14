import axios from 'axios';
// import { HOST_WITH_PORT } from '../../environment';

const CREATE_COMMENT = 'CREATE_COMMENT';

const createComment = (comment) => ({
  type: CREATE_COMMENT,
  comment
});

const defaultComments = [];

export const createCommentFromServer = (comment) => async (dispatch) => {
  try {
    const response = await axios.post(
      `http://localhost3001/api/comments`,
      comment
    );
    dispatch(createComment(response.data));
  } catch (err) {
    console.error(err);
  }
};

export default function commentsReducer(state = defaultComments, action) {
  switch (action.type) {
    case CREATE_COMMENT:
      return [state.comments, action.comment];
    default:
      return state;
  }
}
