import React from "react";
import { connect } from "react-redux";
import { useRef } from "react";
import { upVote, downVote } from "../../actions";
//components for svg icons, so we can dinamically change their style
import PlusIcon from "./PlusIcon";
import MinusIcon from "./MinusIcon";

const VoteButton = ({ upVote, downVote, comment, isCurrentUser }) => {
  //since action creators have a problem with conditional rendering of score,
  //we made a reference to the score and we can change it only to one more or less
  const vote = useRef(comment.score);

  return (
    /*we use the comment object that we passed as a prop to call action creators
     we put into the props via mapStateToProps*/
    <div className="vote-button">
      <PlusIcon
        onIconClick={() => {
          //he shouldnt be able to vote on his own comment
          upVote(comment, isCurrentUser ? vote.current : vote.current + 1);
        }}
      />
      <span className="vote-count">{comment.score}</span>
      <MinusIcon
        onIconClick={() => {
          downVote(comment, isCurrentUser ? vote.current : vote.current - 1);
        }}
      />
    </div>
  );
};

//we don't need to use the state here, just action creators
export default connect(null, { upVote, downVote })(VoteButton);
