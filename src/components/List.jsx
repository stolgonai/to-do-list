import React from "react";
import Todo from './Todo'

export default function List(data) {
  return (
    <div>
      {data.map((el, index) => <Todo />)}
    </div>
  );
}

