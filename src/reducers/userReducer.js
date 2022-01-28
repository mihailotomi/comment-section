import { INITIAL_USER } from ".";

const userReducer = (state = INITIAL_USER, action) => {
  if (action.type === "CHANGE_USER") {
    return action.payload;
  }
  return state;
};

export default userReducer;
