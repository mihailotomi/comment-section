import React from "react";
import DeleteImg from "./icons/icon-delete.svg";

const DeleteButton = () => {
  return (
    <div className="delete-button">
      <img src={DeleteImg} alt="" className="delete-sign" /> Delete
    </div>
  );
};

export default DeleteButton;
