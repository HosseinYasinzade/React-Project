import { useState } from "react";
import axios from "axios";
import Quote from "./components/Quote";

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const handleClick = () => {
    axios
      .get("https://api.quotable.io/random")
      .then((response) => {
        setData(response.data);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  return (
    <>
      <Quote handleClick={handleClick} error={error} data={data} />
    </>
  );
}

export default App;
