import React from "react";
import DeleteImg from "./icons/icon-delete.svg";
import { overlayMode } from "../../actions";

import { connect } from "react-redux";

const DeleteButton = ({ comment, overlayMode }) => {
  return (
    <div
      className="delete-button"
      onClick={() => {
        overlayMode(comment, true);
      }}
    >
      <img src={DeleteImg} alt="" className="delete-sign" /> Delete
    </div>
  );
};

export default connect(null, { overlayMode })(DeleteButton);
