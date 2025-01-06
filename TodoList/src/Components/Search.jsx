import React from "react";

const Search = () => {
  return (
    <section className="flex justify-center items-center h-28">
      <form className="w-full max-w-md">
        <input
          type="text"
          placeholder="Todo Title"
          className="border-none outline-none h-10 w-full md:w-1/2 lg:w-80 rounded-3xl px-4 mr-3"
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
