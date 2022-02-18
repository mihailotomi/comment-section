import React from "react";
import { useState, useRef, useEffect } from "react";
import VoteButton from "./comment/VoteButton";
import ReplyButton from "./comment/ReplyButton";
import EditButton from "./comment/EditButton";
import DeleteButton from "./comment/DeleteButton";
import { updateComment } from "../actions";

import { connect } from "react-redux";

const Comment = ({ comment, isReply, isCurrentUser, updateComment }) => {
  const [editMode, setEditMode] = useState(false);
  const textareaRef = useRef();
  const commentRef = useRef();

  //set edit mode to false if the click was registered outside of comment
  useEffect(() => {
    const onBodyClick = (event) => {
      //check if the element that is referenced via useRef contains the clicked element
      //it can be accessed with the current property
      if (commentRef.current && commentRef.current.contains(event.target)) {
        return;
      }
      //if it does not contain it, close the dropdown
      setEditMode(false);
    };

    document.body.addEventListener("click", onBodyClick);

    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  }, []);

  //give comment a YOU tag if the comment is by the current user
  const renderCurrentUser = (isCurrent) => {
    return isCurrent ? <span className="is-you">you</span> : "";
  };

  //comment has a reply button or edit and delete buttons
  const renderReplyOrEditButton = (isCurrent) => {
    return isCurrent ? (
      <div
        style={{
          display: "flex",
          justifyContent: "end",
        }}
        className="edit-and-delete"
      >
        <DeleteButton comment={comment} />
        <EditButton editMode={editMode} setEditMode={setEditMode} />
      </div>
    ) : (
      <ReplyButton />
    );
  };

  //it is an object for conditionally asigning atributes to the component
  let commentContent = {};
  //if comment is open in edit mode use textarea as the content
  if (editMode) {
    commentContent.children = [
      <textarea
        ref={textareaRef}
        className="input"
        style={{ width: "100%" }}
        key={1}
        defaultValue={comment.content}
      ></textarea>,
    ];
  } else {
    //if it is not in edit mode content has a span to represents the
    //user it is replying to
    commentContent.dangerouslySetInnerHTML = {
      __html: isReply
        ? `<span class='reply-to'>@${comment.user.username} </span>` +
          comment.content
        : comment.content,
    };
  }

  const renderUpdateButton = () => {
    return (
      <button
        className="update-button"
        onClick={() => {
          updateComment(comment, textareaRef.current.value);
          setEditMode(false);
        }}
      >
        Update
      </button>
    );
  };

  return (
    //the outer div contains the comment and the thread line if the comment is a reply
    <div style={{ display: "flex" }}>
      {/*if the comment is a reply, give it a reply css class to style it as a reply
      if it is in edit mode add edit-mode class*/}
      <div className={isReply ? "reply-line" : ""}></div>
      <div
        ref={commentRef}
        //prettier-ignore
        className={`comment ${isReply ? "reply" : ""} ${editMode ? "edit-mode" : ""}`}
      >
        <div className="info">
          <img
            src={window.location.origin + comment.user.image.png}
            className="user-image"
            alt=""
          />
          <span className="username">{comment.user.username}</span>
          {renderCurrentUser(isCurrentUser)}
          <span className="time-uploaded">{comment.createdAt}</span>
        </div>
        <div className="content" {...commentContent}></div>
        {/*pass the comment on so that it can be used in action creators*/}
        <VoteButton comment={comment} isCurrentUser={isCurrentUser} />
        {renderReplyOrEditButton(isCurrentUser)}
        {editMode ? renderUpdateButton() : ""}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { commentsArray: state.comments };
};

export default connect(mapStateToProps, { updateComment })(Comment);
