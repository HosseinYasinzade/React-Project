import React from "react";

const Search = () => {
  return (
    <section className="flex justify-center items-center h-28">
      <form>
        <input
          type="text"
          placeholder="Todo Title"
          className="border-none outline-none h-10 w-80 rounded-3xl px-4 mr-3"
        />
        <input
          type="submit"
          value="Submit"
          className="bg-green-600 text-white w-24 h-12 rounded-3xl"
        />
      </form>
    </section>
  );
};

export default Search;
