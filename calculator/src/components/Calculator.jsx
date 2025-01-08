import React from "react";

const Calculator = () => {
  return (
    <main className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <div className="monitor bg-gray-200 p-4 rounded mb-4">
          <h1 className="text-right text-3xl font-bold">0</h1>
        </div>
        <div className="btns grid grid-cols-4 gap-2">
          <button className="bg-gray-300 hover:bg-gray-400 text-xl font-bold py-2 px-4 rounded">
            7
          </button>
          <button className="bg-gray-300 hover:bg-gray-400 text-xl font-bold py-2 px-4 rounded">
            8
          </button>
          <button className="bg-gray-300 hover:bg-gray-400 text-xl font-bold py-2 px-4 rounded">
            9
          </button>
          <button className="bg-orange-500 hover:bg-orange-600 text-white text-xl font-bold py-2 px-4 rounded">
            ÷
          </button>
          <button className="bg-gray-300 hover:bg-gray-400 text-xl font-bold py-2 px-4 rounded">
            4
          </button>
          <button className="bg-gray-300 hover:bg-gray-400 text-xl font-bold py-2 px-4 rounded">
            5
          </button>
          <button className="bg-gray-300 hover:bg-gray-400 text-xl font-bold py-2 px-4 rounded">
            6
          </button>
          <button className="bg-orange-500 hover:bg-orange-600 text-white text-xl font-bold py-2 px-4 rounded">
            ×
          </button>
          <button className="bg-gray-300 hover:bg-gray-400 text-xl font-bold py-2 px-4 rounded">
            1
          </button>
          <button className="bg-gray-300 hover:bg-gray-400 text-xl font-bold py-2 px-4 rounded">
            2
          </button>
          <button className="bg-gray-300 hover:bg-gray-400 text-xl font-bold py-2 px-4 rounded">
            3
          </button>
          <button className="bg-orange-500 hover:bg-orange-600 text-white text-xl font-bold py-2 px-4 rounded">
            -
          </button>
          <button className="bg-gray-300 hover:bg-gray-400 text-xl font-bold py-2 px-4 rounded col-span-2">
            0
          </button>
          <button className="bg-gray-300 hover:bg-gray-400 text-xl font-bold py-2 px-4 rounded">
            .
          </button>
          <button className="bg-orange-500 hover:bg-orange-600 text-white text-xl font-bold py-2 px-4 rounded">
            +
          </button>
          <button className="bg-red-500 hover:bg-red-600 text-white text-xl font-bold py-2 px-4 rounded col-span-2">
            C
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white text-xl font-bold py-2 px-4 rounded col-span-2">
            =
          </button>
        </div>
      </div>
    </main>
  );
};

export default Calculator;
