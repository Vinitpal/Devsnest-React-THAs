import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { updateItem } from "../actions/index";

const Edit = ({ setIsEditing, index }) => {
  const dispatch = useDispatch();

  const [newTitle, setNewTitle] = useState("");

  return (
    <div className="edit__component">
      <div className="edit__input__container">
        <input
          type="text"
          onChange={(e) => {
            setNewTitle(e.target.value);
          }}
        />
      </div>
      <div className="edit__button__container">
        <button
          style={{ color: "#0f0" }}
          onClick={() => {
            if (newTitle.length > 0) {
              setIsEditing(false);
              dispatch(
                updateItem({
                  index: index,
                  nTitle: newTitle,
                })
              );
            }
          }}
        >
          Done
        </button>
        <button
          style={{ color: "salmon" }}
          onClick={() => {
            setIsEditing(false);
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Edit;
