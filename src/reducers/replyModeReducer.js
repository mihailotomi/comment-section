import { INITIAL_COMMENTS } from ".";

const replyModeReducer = (
  state = { comment: INITIAL_COMMENTS[0], isTrue: false },
  action
) => {
  switch (action.type) {
    case "REPLY_MODE":
      return { comment: action.payload.comment, isTrue: action.payload.isTrue };
    default:
      return state;
  }
};

export default replyModeReducer;
