import React from "react";
import VoteButton from "./comment/VoteButton";
import ReplyButton from "./comment/ReplyButton";
import EditButton from "./comment/EditButton";
import DeleteButton from "./comment/DeleteButton";

import { connect } from "react-redux";

const Comment = ({ comment, isReply, isCurrentUser }) => {
  const isYou = isCurrentUser;

  const renderCurrentUser = (isCurrent) => {
    return isCurrent ? <span className="is-you">you</span> : "";
  };

  const renderReplyOrEdit = (isCurrent) => {
    return isCurrent ? (
      <div
        style={{
          display: "flex",
          justifyContent: "end",
        }}
        className="edit-and-delete"
      >
        <DeleteButton /> <EditButton />
      </div>
    ) : (
      <ReplyButton />
    );
  };

  return (
    <div style={{ display: "flex" }}>
      {/*if the comment is a reply, give it a reply css class to style it as a reply*/}
      <div className={isReply ? "reply-line" : ""}></div>
      <div className={`comment ${isReply ? "reply" : ""}`}>
        <div className="info">
          <img
            src={window.location.origin + comment.user.image.png}
            className="user-image"
            alt=""
          />
          <span className="username">{comment.user.username}</span>
          {renderCurrentUser(isYou)}
          <span className="time-uploaded">{comment.createdAt}</span>
        </div>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: comment.content }}
        ></div>
        {/*pass the comment on so that it can be used in action creators*/}
        <VoteButton comment={comment} />
        {renderReplyOrEdit(isYou)}
      </div>
    </div>
  );
};

export default connect(null)(Comment);
