import { INITIAL_COMMENTS } from "./index";

//it stores the comment that created the overlay
//so the overlay component it creates could call deleteComment reducer
const overlayReducer = (
  state = { comment: INITIAL_COMMENTS[0], isTrue: false },
  action
) => {
  switch (action.type) {
    case "OVERLAY_MODE":
      return { comment: action.payload.comment, isTrue: action.payload.isTrue };
    default:
      return state;
  }
};

export default overlayReducer;
