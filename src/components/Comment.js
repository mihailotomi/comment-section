import React from "react";
import VoteButton from "./comment/VoteButton";
import ReplyButton from "./comment/ReplyButton";

const Comment = () => {
  const commentText = `Lorem ipsum dolor sit amet consectetur,
    adipisicing elit. Eaque amet error magnam nihil velit voluptate exercitationem earum eius placeat?
    Aut eveniet optio commodi a neque corporis vitae, rem similique aliquam?`;

  const username = "mike";
  const isYou = "";
  const timeUploaded = "2 months ago";

  return (
    <div className="comment">
      <div className="info">
        <img
          src={require("../images/avatars/image-amyrobson.png")}
          className="user-image"
          alt=""
        />
        <span className="username">{username}</span>
        <span className="is-you">{isYou}</span>
        <span className="time-uploaded">{timeUploaded}</span>
      </div>
      <div className="content">{commentText}</div>
      <VoteButton />
      <ReplyButton />
    </div>
  );
};

export default Comment;
