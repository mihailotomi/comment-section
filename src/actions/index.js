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

export const createReply = (comment, content, currentUser) => {
  return {
    type: "CREATE_REPLY",
    payload: { comment, content, currentUser },
  };
};

//it needs to pass the comment that creates the overlay
export const overlayMode = (comment, isTrue) => {
  return {
    type: "OVERLAY_MODE",
    payload: { comment, isTrue },
  };
};

export const createReplyMode = (comment, isTrue) => {
  return {
    type: "REPLY_MODE",
    payload: { comment, isTrue },
  };
};
