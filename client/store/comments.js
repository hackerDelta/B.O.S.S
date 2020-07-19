import axios from 'axios';

const CREATE_COMMENT = 'CREATE_COMMENT';

const createComment = (comment) => ({
  type: CREATE_COMMENT,
  comment
});

const defaultComments = [];

export const createCommentFromServer = (comment) => async (dispatch) => {
  try {
    const response = await axios.post(
      `https://hackerdelta-capstone.herokuapp.com/api/comments`,
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
