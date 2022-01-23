export const upVote = (comment) => {
  return {
    type: "UPVOTE",
    payload: comment.id,
  };
};

export const downVote = (comment) => {
  return {
    type: "DOWNVOTE",
    payload: comment.id,
  };
};
