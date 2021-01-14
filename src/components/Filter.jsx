import React, { useState } from "react";

export default function Filter({ value, onChange }) {
  return (
    <div>
      <label className="filterInput">
        <input
          type="radio"
          name="filter"
          value="ALL"
          checked={value === "ALL"}
          onChange={onChange}
        />
        All
      </label>
      <label className="filterInput">
        <input
          type="radio"
          name="filter"
          value="COMPLETED"
          checked={value === "COMPLETED"}
          onChange={onChange}
        />
        Completed
      </label>
      <label className="filterInput">
        <input
          type="radio"
          name="filter"
          value="UNCOMPLETED"
          checked={value === "UNCOMPLETED"}
          onChange={onChange}
        />
        Uncompleted
      </label>
    </div>
  );
}
