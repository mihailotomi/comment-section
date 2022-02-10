import React from "react";
import EditImg from "./icons/icon-edit.svg";

const EditButton = ({ editMode, setEditMode }) => {
  return (
    <div
      className="edit-button"
      onClick={() => {
        setEditMode(!editMode);
      }}
    >
      <img src={EditImg} alt="" className="edit-sign" /> Edit
    </div>
  );
};

export default EditButton;
