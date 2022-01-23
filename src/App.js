import React from "react";
import Comment from "./components/Comment";
import "./styles/css/style.css";
import { connect } from "react-redux";

//the comments are a part of redux state
const App = ({ comments }) => {
  //since replies are stored as arguments of comments(check reducers/index.js), we need to make a new array
  //that is consisted of comments and replies
  const commentsAndReplies = [];
  comments.forEach((comment) => {
    commentsAndReplies.push({
      id: comment.id,
      content: comment.content,
      user: comment.user,
      score: comment.score,
      createdAt: comment.createdAt,
      //makes sure to know if the comment is a reply so that we could render it as a reply
      isReply: false,
    });
    if (comment.replies) {
      //if there are replies add them onto the array
      comment.replies.forEach((reply) => {
        commentsAndReplies.push({ ...reply, isReply: true });
      });
    }
  });

  //turn an array of comments(and replies) into an aray of jsx components
  const renderedComments = commentsAndReplies.map((comment) => {
    return (
      <Comment
        isReply={comment.isReply}
        //pass on the refrence to the comment object that was used this instance
        comment={comment}
        key={comment.id}
      />
    );
  });

  return <div className="container">{renderedComments}</div>;
};

const mapStateToProps = (state) => {
  return { comments: state.comments };
};

export default connect(mapStateToProps)(App);
