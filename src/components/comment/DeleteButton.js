import React from "react";
import DeleteImg from "./icons/icon-delete.svg";
import { deleteComment } from "../../actions";

import { connect } from "react-redux";

const DeleteButton = ({ comment, deleteComment }) => {
  return (
    <div
      className="delete-button"
      onClick={() => {
        deleteComment(comment);
      }}
    >
      <img src={DeleteImg} alt="" className="delete-sign" /> Delete
    </div>
  );
};

export default connect(null, { deleteComment })(DeleteButton);
