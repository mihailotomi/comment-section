import React from "react";
import { useEffect } from "react";
import Comment from "./components/Comment";
import PostComment from "./components/PostComment";
import "./styles/css/style.css";

//& action creators
import { deleteComment } from "./actions";
import { overlayMode } from "./actions";

import { connect } from "react-redux";

//the comments and the current user are a part of redux state
const App = ({
  comments,
  currentUser,
  overlay,
  deleteComment,
  overlayMode,
  replyMode,
}) => {
  //prettier-ignore

  useEffect(()=>{
    localStorage.setItem('comments',JSON.stringify(comments))
  })

  //$ since replies are stored as arguments of comments(check reducers/index.js), we need to make a new array
  //$that is consisted of comments and replies
  const commentsAndReplies = [];
  comments.forEach((comment) => {
    commentsAndReplies.push({
      id: comment.id,
      content: comment.content,
      user: comment.user,
      score: comment.score,
      createdAt: comment.createdAt,
      ////makes sure to know if the comment is a reply so that we could style it as a reply
      isReply: false,
    });
    if (comment.replies) {
      ////if there are replies add them onto the array
      comment.replies.forEach((reply) => {
        commentsAndReplies.push({
          ...reply,
          isReply: true,
        });
      });
    }
  });

  //$turn an array of comments(and replies) into an aray of jsx components
  const renderedComments = commentsAndReplies.map((comment) => {
    return (
      //// the outer div holds the comment and eventualy the form that gets opened
      //// when the user wants to reply
      <div key={comment.id}>
        <Comment
          isReply={comment.isReply}
          ////pass on the refrence to the comment object that was used to create this instance
          comment={comment}
          isCurrentUser={
            currentUser.username === comment.user.username ? true : false
          }
        />

        {
          //prettier-ignore
          //// if the comment is being replied to we need the reply form
          ////it needs to know if it is replying to a reply, so that it itself gets styled as a reply,
          //// and has to have a REPLY label so it could differ from comment creation form and put that label on the button
          replyMode.isTrue && replyMode.comment.id === comment.id ? (<PostComment isReply={comment.isReply} label={'REPLY'} comment={comment}/>) : ("")
        }
      </div>
    );
  });

  //$ a function that gets called when the user wants to delete his comment or reply
  //$ it puts a dark overlay on the page and renders a ARE YOU SURE type of pop up
  const renderOverlay = () => {
    return (
      <div className="dark-overlay">
        <div className="overlay-pop-up">
          <h3 className="pop-up-title">DELETE COMMENT</h3>
          <p className="pop-up-question">
            Are you sure you want to delete this comment? This will remove the
            comment and can't be undone.
          </p>
          <div className="pop-up-answers">
            {
              ////if the user clicks NO it should just remove the pop up and the overlay
            }
            <button
              className="no"
              onClick={() => overlayMode(overlay.comment, false)}
            >
              NO, CANCEL
            </button>
            {
              //// if the user clicks yes, it should delete the comment and remove the pop up and the overlay
            }
            <button
              className="yes"
              onClick={() => {
                deleteComment(overlay.comment);
                overlayMode(overlay.comment, false);
              }}
            >
              YES, DELETE
            </button>
          </div>
        </div>
      </div>
    );
  };

  //$the entire app consists of the Comment component array and the comment creation form
  return (
    <div>
      {overlay.isTrue ? renderOverlay() : ""}
      <div className="container">
        {renderedComments}
        <PostComment isReply={false} label={"SEND"} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    comments: state.comments,
    currentUser: state.currentUser,
    overlay: state.overlay,
    replyMode: state.replyMode,
  };
};

export default connect(mapStateToProps, { deleteComment, overlayMode })(App);
