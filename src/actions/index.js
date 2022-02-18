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

export const updateComment = (comment, content) => {
  return {
    type: "UPDATE_COMMENT",
    payload: { id: comment.id, content },
  };
};

export const deleteComment = (comment) => {
  return {
    type: "DELETE_COMMENT",
    payload: comment,
  };
};
