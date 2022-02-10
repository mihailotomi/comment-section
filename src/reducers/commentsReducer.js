import { INITIAL_COMMENTS } from "./index";

const commentsReducer = (state = INITIAL_COMMENTS, action) => {
  //we need to find the last element in comments array,
  //or the last comments' replies subaray so we could asign new comment with the id
  let lastElement = state[state.length - 1];
  if (lastElement.replies) {
    lastElement = lastElement.replies[lastElement.replies.length - 1];
  }

  switch (action.type) {
    //actios' payload passes the id of the comment and the new score
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
      //action.payload passes the entire comment object exept the id
      return [...state, { ...action.payload, id: lastElement.id + 1 }];
    case "UPDATE_COMMENT":
      return state.map((comment) => {
        if (comment.id === action.payload.id) {
          comment.content = action.payload.content;
        }
        if (comment.replies) {
          comment.replies.forEach((reply) => {
            if (reply.id === action.payload.id) {
              console.log(reply.id);
              reply.content = action.payload.content;
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
