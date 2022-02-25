import { INITIAL_COMMENTS } from "./index";

let commentsArray = JSON.parse(localStorage.getItem("comments"));
if (commentsArray === null) {
  commentsArray = INITIAL_COMMENTS;
}

const commentsReducer = (state = commentsArray, action) => {
  ////we need to find the last element in comments array,
  ////or the last element in comments' replies subaray, in order to keep track of last asigned id
  let lastId = 0;
  state.forEach((comment) => {
    if (comment.id > lastId) {
      lastId = comment.id;
    }
    if (comment.replies) {
      comment.replies.forEach((reply) => {
        if (reply.id > lastId) {
          lastId = reply.id;
        }
      });
    }
  });

  switch (action.type) {
    //actions' payload passes the id of the comment and the new score
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
      return [...state, { ...action.payload, id: lastId + 1 }];
    case "UPDATE_COMMENT":
      return state.map((comment) => {
        if (comment.id === action.payload.id) {
          comment.content = action.payload.content;
        }
        if (comment.replies) {
          comment.replies.forEach((reply) => {
            if (reply.id === action.payload.id) {
              reply.content = action.payload.content;
            }
          });
        }
        return comment;
      });

    case "DELETE_COMMENT":
      return state.filter((comment) => {
        if (comment.replies) {
          comment.replies = comment.replies.filter((reply) => {
            return reply.id !== action.payload.id;
          });
        }
        return comment.id !== action.payload.id;
      });

    case "CREATE_REPLY":
      return state.map((comment) => {
        if (comment.id === action.payload.comment.id) {
          comment.replies = [
            ...comment.replies,
            {
              id: lastId + 1,
              content: action.payload.content,
              createdAt: "now",
              replyingTo: action.payload.comment.user.username,
              user: action.payload.currentUser,
              score: 0,
            },
          ];
        }
        if (comment.replies) {
          comment.replies.forEach((reply) => {
            if (reply.id === action.payload.comment.id) {
              comment.replies = [
                ...comment.replies,
                {
                  id: lastId + 1,
                  content: action.payload.content,
                  createdAt: "now",
                  replyingTo: reply.user.username,
                  user: action.payload.currentUser,
                  score: 0,
                },
              ];
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
