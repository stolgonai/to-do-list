import React from "react";

export default function Form({ value, onChange, onClick }) {
  return (
    <div className="activity">
      <input
        className="searchInput"
        type="text"
        placeholder="enter a new task"
        value={value}
        onChange={onChange}
      />
      <button className="add" onClick={onClick}>
        {" "}
        Add{" "}
      </button>
    </div>
  );
}
