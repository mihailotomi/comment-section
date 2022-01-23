import React from "react";
import replyImg from "./icon-reply.svg";

const ReplyButton = () => {
  return (
    <div className="reply-button">
      <img src={replyImg} alt="" /> Reply
    </div>
  );
};

export default ReplyButton;
