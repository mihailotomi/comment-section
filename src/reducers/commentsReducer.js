import { INITIAL_COMMENTS } from "./index";

//we go through the array of comments and their replies
//to find the one we need to change the score of
const commentsReducer = (state = INITIAL_COMMENTS, action) => {
  switch (action.type) {
    case "UPVOTE":
      return state.map((comment) => {
        if (comment.id === action.payload.id) {
          comment.score = action.payload.score;
        }
        if (comment.replies) {
          comment.replies.forEach((reply) => {
            if (reply.id === action.payload.id) {
              reply.score = action.payload.score;
            }
          });
        }
        return comment;
      });
    case "DOWNVOTE":
      return state.map((comment) => {
        if (comment.id === action.payload.id) {
          comment.score = action.payload.score;
        }
        if (comment.replies) {
          comment.replies.forEach((reply) => {
            if (reply.id === action.payload.id) {
              reply.score = action.payload.score;
            }
          });
        }
        return comment;
      });
    default:
      return state;
  }
};

export default commentsReducer;
