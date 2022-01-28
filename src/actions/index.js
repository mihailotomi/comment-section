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
    action: "CHANGE_USER",
    payload: user,
  };
};
