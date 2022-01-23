import React from "react";
import minusImg from "./icon-minus.svg";
import plusImg from "./icon-plus.svg";

const VoteButton = () => {
  const count = 5;

  return (
    <div className="vote-button">
      <img src={plusImg} alt="" className="vote-img plus" />
      <span className="vote-count">{count}</span>
      <img src={minusImg} alt="" className="vote-img minus" />
    </div>
  );
};

export default VoteButton;
