import React from "react";

import { connect } from "react-redux";

//& action creators
import { setFormValue } from "../actions";
import { createComment } from "../actions";
import { createReply } from "../actions";
import { createReplyMode } from "../actions";

const PostComment = ({
  comment = {},
  currentUser,
  formValue,
  setFormValue,
  createComment,
  createReply,
  createReplyMode,
  isReply,
  label,
}) => {
  return (
    <div style={{ display: "flex" }}>
      <div className={isReply ? "reply-line" : ""}></div>
      <form className={`post-comment ${isReply ? "reply" : ""}`}>
        <img
          src={window.location.origin + currentUser.image.png}
          alt=""
          className="user-image"
        />
        <textarea
          name=""
          id=""
          placeholder="Add a comment..."
          className="input"
          value={formValue}
          onChange={(event) => {
            setFormValue(event.target.value);
          }}
        ></textarea>
        <button
          className="send"
          onClick={(event) => {
            event.preventDefault();
            label === "SEND"
              ? createComment({
                  user: currentUser,
                  createdAt: "now",
                  score: 0,
                  content: formValue,
                })
              : createReply(comment, formValue, currentUser);
            createReplyMode(comment, false);
            setFormValue("");
          }}
        >
          {label}
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { currentUser: state.currentUser, formValue: state.formValue };
};

export default connect(mapStateToProps, {
  setFormValue,
  createComment,
  createReply,
  createReplyMode,
})(PostComment);
