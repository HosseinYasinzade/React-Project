import { useState } from "react";
import Header from "./Components/Header";
import Search from "./Components/Search";
import Todos from "./Components/Todos";

const App = () => {
  const [todos, setTodos] = useState([]);
  return (
    <>
      <Header todos={todos} setTodos={setTodos} />
      <Search todos={todos} setTodos={setTodos} />
      <Todos todos={todos} setTodos={setTodos} />
    </>
  );
};

export default App;
