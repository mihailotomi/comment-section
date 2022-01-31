import React from "react";
import { connect } from "react-redux";
import { setFormValue } from "../actions";
import { createComment } from "../actions";

const PostComment = ({
  currentUser,
  formValue,
  setFormValue,
  createComment,
}) => {
  return (
    <form className="post-comment">
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
          createComment({
            user: currentUser,
            createdAt: "now",
            score: 0,
            content: formValue,
          });
          setFormValue("");
        }}
      >
        Send
      </button>
    </form>
  );
};

const mapStateToProps = (state) => {
  return { currentUser: state.currentUser, formValue: state.formValue };
};

export default connect(mapStateToProps, { setFormValue, createComment })(
  PostComment
);
