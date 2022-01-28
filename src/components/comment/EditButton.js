import React from "react";
import EditImg from "./icons/icon-edit.svg";

const EditButton = () => {
  return (
    <div className="edit-button">
      <img src={EditImg} alt="" className="edit-sign" /> Edit
    </div>
  );
};

export default EditButton;
