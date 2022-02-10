import React from "react";
import Comment from "./components/Comment";
import PostComment from "./components/PostComment";
import "./styles/css/style.css";
import { connect } from "react-redux";

//the comments and the current user are a part of redux state
const App = ({ comments, currentUser }) => {
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
        key={comment.id}
        isReply={comment.isReply}
        //pass on the refrence to the comment object that was used to create this instance
        comment={comment}
        isCurrentUser={
          currentUser.username === comment.user.username ? true : false
        }
      />
    );
  });

  return (
    <div className="container">
      {renderedComments}
      <PostComment />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { comments: state.comments, currentUser: state.currentUser };
};

export default connect(mapStateToProps)(App);
