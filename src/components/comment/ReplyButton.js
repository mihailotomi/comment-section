import React from "react";
import replyImg from "./icons/icon-reply.svg";

const ReplyButton = () => {
  return (
    <div className="reply-button">
      <img src={replyImg} alt="" className="reply-sign" /> Reply
    </div>
  );
};

export default ReplyButton;
