import { INITIAL_COMMENTS } from "./index";

const commentsReducer = (state = INITIAL_COMMENTS, action) => {
  switch (action.type) {
    case "UPVOTE":
      return state.map((comment) => {
        if (comment.id === action.payload) {
          comment.score += 1;
        }
        if (comment.replies) {
          comment.replies.forEach((reply) => {
            if (reply.id === action.payload) {
              reply.score += 1;
            }
          });
        }
        return comment;
      });
    case "DOWNVOTE":
      return state.map((comment) => {
        if (comment.id === action.payload) {
          comment.score -= 1;
        }
        if (comment.replies) {
          comment.replies.forEach((reply) => {
            if (reply.id === action.payload) {
              reply.score -= 1;
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
