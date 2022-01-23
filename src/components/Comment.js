import React from "react";
import VoteButton from "./comment/VoteButton";
import ReplyButton from "./comment/ReplyButton";
import { connect } from "react-redux";

const Comment = ({ comment, isReply }) => {
  const isYou = "";

  return (
    /*if the comment is a reply, give it a reply css class to style it as a reply*/
    <div className={`comment ${isReply ? "reply" : ""}`}>
      <div className="info">
        <img
          src={window.location.origin + comment.user.image.png}
          className="user-image"
          alt=""
        />
        <span className="username">{comment.user.username}</span>
        <span className="is-you">{isYou}</span>
        <span className="time-uploaded">{comment.createdAt}</span>
      </div>
      <div className="content">{comment.content}</div>
      {/*pass the comment on so that it can be used in action creators*/}
      <VoteButton comment={comment} />
      <ReplyButton />
    </div>
  );
};

export default connect(null)(Comment);
