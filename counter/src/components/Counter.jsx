import { useState } from "react";

const Counter = () => {
  const handleDecrement = () =>
    setCount((count) => {
      if (count === 0) {
        return 0;
      }
      return count - 1;
    });

  const handleIncrement = () => setCount((count) => count + 1);

  const handleReset = () => setCount(0);

  const [count, setCount] = useState(0);
  return (
    <main className="flex flex-col justify-center items-center text-white font-bold text-5xl">
      <h1 className="mt-40">Counter</h1>
      <div className="flex justify-center items-center gap-4 mt-8">
        <button
          className="px-3 py-2 shadow-md shadow-pink-800 rounded-md"
          onClick={handleDecrement}
        >
          -
        </button>
        <p>{count}</p>
        <button
          className="px-2 py-2 shadow-md shadow-pink-800 rounded-md"
          onClick={handleIncrement}
        >
          +
        </button>
      </div>
      <button
        className="w-40 h-10 rounded-md mt-8 bg-pink-800 text-3xl"
        onClick={handleReset}
      >
        Reset
      </button>
    </main>
  );
};

export default Counter;
