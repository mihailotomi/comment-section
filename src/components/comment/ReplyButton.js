import React from "react";
import replyImg from "./icons/icon-reply.svg";

//& action creators
import { createReplyMode } from "../../actions";

import { connect } from "react-redux";

const ReplyButton = ({ replyMode, createReplyMode, comment }) => {
  return (
    <div
      className="reply-button"
      onClick={() => {
        createReplyMode(comment, !replyMode.isTrue);
      }}
    >
      <img src={replyImg} alt="" className="reply-sign" /> Reply
    </div>
  );
};

const mapStateToProps = (state) => {
  return { replyMode: state.replyMode };
};

export default connect(mapStateToProps, { createReplyMode })(ReplyButton);
