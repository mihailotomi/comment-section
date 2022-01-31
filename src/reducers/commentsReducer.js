import { INITIAL_COMMENTS } from "./index";

//we go through the array of comments and their replies
//to find the one we need to change the score of
const commentsReducer = (state = INITIAL_COMMENTS, action) => {
  let lastElement = state[state.length - 1];
  if (lastElement.replies) {
    lastElement = lastElement.replies[lastElement.replies.length - 1];
  }

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
    case "CREATE_COMMENT":
      return [...state, { ...action.payload, id: lastElement.id + 1 }];
    default:
      return state;
  }
};

export default commentsReducer;
