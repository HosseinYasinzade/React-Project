import { useState } from "react";
import axios from "axios";

const Header = ({ todos, setTodos }) => {
  const [newTodoTitle, setNewTodoTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newTodoTitle.trim() !== "") {
      const newTodo = {
        id: todos.length,
        title: newTodoTitle,
        completed: false,
      };
      try {
        const response = await axios.post(
          "http://localhost:3000/todos",
          newTodo
        );
        setTodos([...todos, response.data]);
        setNewTodoTitle("");
      } catch (error) {
        console.error("Error adding todo:", error);
      }
    }
  };

  return (
    <header className="flex justify-between items-center bg-green-600 h-32 sm:px-12 md:px-16 lg:px-24  shadow-lg">
      <h1 className="text-white font-bold text-xl md:text-3xl lg:text-4xl">
        Todo App
      </h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Todo Title"
            className="border-none outline-none h-10 w-40 lg:w-80 rounded-3xl px-4 mr-3"
            value={newTodoTitle}
            onChange={(e) => setNewTodoTitle(e.target.value)}
          />
          <input
            type="submit"
            value="Add"
            className="bg-green-800 text-white w-24 h-12 rounded-3xl"
          />
        </form>
      </div>
    </header>
  );
};

export default Header;
