import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-green-600 h-32 px-24 shadow-lg">
      <h1 className="text-white font-bold text-4xl">Todo App</h1>
      <div className="form-container">
        <form>
          <input
            type="text"
            placeholder="Todo Title"
            className="border-none outline-none h-10 w-80 rounded-3xl px-4 mr-3"
          />
          <input
            type="submit"
            value="Submit"
            className="bg-green-800 text-white w-24 h-12 rounded-3xl"
          />
        </form>
      </div>
    </header>
  );
};

export default Header;
