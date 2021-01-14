import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import Filter from "./components/Filter";
import Todo from "./components/Todo";
import { v4 as uuid } from "uuid";
import "./styles.css";

export default function App() {
  const [todoValue, setTodoValue] = useState("");
  const [todos, setTodo] = useState([]);
  const [filter, setFilter] = useState("ALL");

  const handleInputVal = (e) => {
    setTodoValue(e.target.value);
  };

  const clickHandle = () => {
    const todo = {
      id: uuid(),
      title: todoValue,
      completed: false
    };
    setTodo([...todos, todo]);
    setTodoValue("");
  };

  useEffect(() => {
    // console.log(todos);
  }, [todos]);

  const handleDelete = (id) => {
    // console.log("I am clicked");
    let deleted = todos.filter((el) => el.id !== id);
    setTodo(deleted);
  };

  const handleDone = (id) => {
    // console.log("clicked");
    let selected = todos.map((task) => {
      if (id === task.id) {
        task.completed = !task.completed;
      }
      return task;
    });
    setTodo(selected);
  };

  function filterTodos() {
    if (filter === "COMPLETED") {
      return todos.filter((task) => task.completed);
    }
    if (filter === "UNCOMPLETED") {
      return todos.filter((task) => !task.completed);
    }
    return todos;
  }
  function handleFilter(e) {
    setFilter(e.target.value);
  }

  console.log(filter, "this is filter");
  // Form
  // Filter
  // List
  // Todo
  return (
    <div className="App">
      <div className="mainContainer">
        <h1> To Do List </h1>
        <Form
          value={todoValue}
          onChange={handleInputVal}
          onClick={clickHandle}
        />
        <div className="activity">
          <Filter value={filter} onChange={handleFilter} />
        </div>
        <div className="taskContainer">
          {filterTodos().map((el) => (
            <Todo {...el} handleDone={handleDone} handleDelete={handleDelete} />
          ))}
        </div>
      </div>
    </div>
  );
}
