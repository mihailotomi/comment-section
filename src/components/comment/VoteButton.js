import React from "react";
import minusImg from "./icon-minus.svg";
import plusImg from "./icon-plus.svg";
import { connect } from "react-redux";
import { upVote, downVote } from "../../actions";

const VoteButton = ({ upVote, downVote, comment }) => {
  return (
    /*we use the comment object that we passed as a prop to call action creators
     we put into the props via mapStateToProps*/
    <div className="vote-button">
      <img
        src={plusImg}
        alt=""
        className="vote-img plus"
        onClick={() => {
          upVote(comment);
        }}
      />
      <span className="vote-count">{comment.score}</span>
      <img
        src={minusImg}
        alt=""
        className="vote-img minus"
        onClick={() => {
          downVote(comment);
        }}
      />
    </div>
  );
};

//we don't need to use the state here, just action creators
export default connect(null, { upVote, downVote })(VoteButton);
