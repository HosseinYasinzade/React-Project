import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaTrash } from "react-icons/fa";

const Todos = ({ todos, setTodos }) => {
  useEffect(() => {
    axios
      .get("http://localhost:3000/todos")
      .then((response) => {
        setTodos(response.data);
      })
      .catch((error) => {
        console.error("Fetch Error", error);
      });
  }, []);

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleCompleted = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <section className="flex flex-col justify-center items-center text-white">
      <h1 className="text-3xl font-bold mb-6">Todos List</h1>
      <ul className="w-full flex flex-col justify-center items-center">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`flex justify-between items-center text-2xl px-8 cursor-pointer bg-green-600 w-1/2 h-16 rounded-2xl my-4 shadow-lg ${
              todo.completed ? "line-through" : ""
            }`}
            onClick={() => handleCompleted(todo.id)}
          >
            {todo.title}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleDelete(todo.id);
              }}
            >
              <FaTrash />
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Todos;
