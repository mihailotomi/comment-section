export const upVote = (comment, score) => {
  return {
    type: "UPVOTE",
    payload: { id: comment.id, score },
  };
};

export const downVote = (comment, score) => {
  return {
    type: "DOWNVOTE",
    payload: { id: comment.id, score },
  };
};

export const changeUser = (user) => {
  return {
    type: "CHANGE_USER",
    payload: user,
  };
};

export const setFormValue = (value) => {
  return {
    type: "SET_FORM_VALUE",
    payload: value,
  };
};

export const createComment = (comment) => {
  return {
    type: "CREATE_COMMENT",
    payload: comment,
  };
};
