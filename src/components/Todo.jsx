import React from "react";


export default function Todo({
  title, completed, id, handleDelete, handleDone
}) {
  return (
    <div key={id} className="oneTask">
      <span
        style={{
          textDecoration: completed ? "line-through" : "initial"
        }}
      >
        {title}
      </span>
      <button className="done" onClick={() => handleDone(id)}>
        ✓
      </button>
      <button
        // key={index}
        className="delete"
        onClick={() => handleDelete(id)}
      >
        ✘
      </button>
    </div>
  );
}