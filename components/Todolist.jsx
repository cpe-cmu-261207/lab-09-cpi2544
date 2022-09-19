import React, { useState } from "react";
import {
  IconCheck,
  IconTrash,
  IconArrowUp,
  IconArrowDown,
} from "@tabler/icons";

export default function Todo(props) {
  const [IsMouseOver, setIsMouseOver] = useState(false);
  const handlemover = () => {
    setIsMouseOver(true);
  };
  const handlemout = () => {
    setIsMouseOver(false);
  };
  return (
    <div>
      <div
        className="border-bottom p-1 py-2 fs-2 d-flex gap-2"
        onMouseOver={handlemover}
        onMouseOut={handlemout}
      >
        <span
          style={
            props.completed
              ? { textDecoration: "line-through" }
              : { textDecoration: "" }
          }
          className="me-auto"
        >
          {props.title}
        </span>

        {IsMouseOver && (
          <>
            <button className="btn btn-success" onClick={() => props.onMark()}>
              <IconCheck />
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => props.onMoveUp()}
            >
              <IconArrowUp />
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => props.onMoveDown()}
            >
              <IconArrowDown />
            </button>
            <button className="btn btn-danger" onClick={() => props.onDelete()}>
              <IconTrash />
            </button>
          </>
        )}
      </div>
    </div>
  );
}
