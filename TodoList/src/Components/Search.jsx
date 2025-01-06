import { useState } from "react";

const Search = ({ todos, setTodos }) => {
  const [value, setValue] = useState("");

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    setValue(searchValue);
    setTodos(todos.filter((todo) => todo.title.includes(searchValue)));
  };

  return (
    <section className="flex justify-center items-center h-28">
      <form className="w-full max-w-md">
        <input
          type="text"
          placeholder="Todo Title"
          className="border-none outline-none h-10 w-full md:w-1/2 lg:w-80 rounded-3xl px-4 mr-3"
          value={value}
          onChange={handleSearch}
        />
        <input
          type="submit"
          value="Submit"
          className="bg-green-600 text-white w-full md:w-24 lg:w-28 h-10 mt-6 rounded-3xl"
        />
      </form>
    </section>
  );
};

export default Search;
