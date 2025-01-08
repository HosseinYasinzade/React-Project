import { useState } from "react";

const Calculator = () => {
  const [display, setDisplay] = useState("0");
  const [operator, setOperator] = useState(null);
  const [value, setValue] = useState(null);

  const handleNumber = (number) => {
    setDisplay((prev) => (prev === "0" ? number : prev + number));
  };

  const handleOperator = (op) => {
    if (display === "") return;
    setValue(parseFloat(display));
    setOperator(op);
    setDisplay("");
  };

  const handleEquals = () => {
    if (!operator || value === null) return;

    const current = parseFloat(display);
    let result;
    switch (operator) {
      case "+":
        result = value + current;
        break;
      case "-":
        result = value - current;
        break;
      case "×":
        result = value * current;
        break;
      case "÷":
        result = current === 0 ? "Error" : value / current;
        break;
      default:
        return;
    }

    setDisplay(result.toString());
    setValue(null);
    setOperator(null);
  };

  const handleClear = () => {
    setDisplay("0");
    setValue(null);
    setOperator(null);
  };

  const handleDecimal = () => {
    if (!display.includes(".")) {
      setDisplay((prev) => prev + ".");
    }
  };

  return (
    <main className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <div className="monitor bg-gray-200 p-4 rounded mb-4">
          <h1 className="text-right text-xl text-gray-500">
            {value !== null && operator ? `${value} ${operator}` : ""}
          </h1>
          <h1 className="text-right text-3xl font-bold">{display}</h1>
        </div>
        <div className="btns grid grid-cols-4 gap-2">
          {["7", "8", "9"].map((num) => (
            <button
              key={num}
              onClick={() => handleNumber(num)}
              className="bg-gray-300 hover:bg-gray-400 text-xl font-bold py-2 px-4 rounded"
            >
              {num}
            </button>
          ))}
          <button
            onClick={() => handleOperator("÷")}
            className="bg-orange-500 hover:bg-orange-600 text-white text-xl font-bold py-2 px-4 rounded"
          >
            ÷
          </button>
          {["4", "5", "6"].map((num) => (
            <button
              key={num}
              onClick={() => handleNumber(num)}
              className="bg-gray-300 hover:bg-gray-400 text-xl font-bold py-2 px-4 rounded"
            >
              {num}
            </button>
          ))}
          <button
            onClick={() => handleOperator("×")}
            className="bg-orange-500 hover:bg-orange-600 text-white text-xl font-bold py-2 px-4 rounded"
          >
            ×
          </button>
          {["1", "2", "3"].map((num) => (
            <button
              key={num}
              onClick={() => handleNumber(num)}
              className="bg-gray-300 hover:bg-gray-400 text-xl font-bold py-2 px-4 rounded"
            >
              {num}
            </button>
          ))}
          <button
            onClick={() => handleOperator("-")}
            className="bg-orange-500 hover:bg-orange-600 text-white text-xl font-bold py-2 px-4 rounded"
          >
            -
          </button>
          <button
            onClick={() => handleNumber("0")}
            className="bg-gray-300 hover:bg-gray-400 text-xl font-bold py-2 px-4 rounded col-span-2"
          >
            0
          </button>
          <button
            onClick={handleDecimal}
            className="bg-gray-300 hover:bg-gray-400 text-xl font-bold py-2 px-4 rounded"
          >
            .
          </button>
          <button
            onClick={() => handleOperator("+")}
            className="bg-orange-500 hover:bg-orange-600 text-white text-xl font-bold py-2 px-4 rounded"
          >
            +
          </button>
          <button
            onClick={handleClear}
            className="bg-red-500 hover:bg-red-600 text-white text-xl font-bold py-2 px-4 rounded col-span-2"
          >
            C
          </button>
          <button
            onClick={handleEquals}
            className="bg-green-500 hover:bg-green-600 text-white text-xl font-bold py-2 px-4 rounded col-span-2"
          >
            =
          </button>
        </div>
      </div>
    </main>
  );
};

export default Calculator;
