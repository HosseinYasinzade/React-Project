import { useState } from "react";
import axios from "axios";

const Quote = () => {
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
    <div>
      <button onClick={handleClick}>Generate Quote</button>

      {error && <h2 style={{ color: "red" }}>{error}</h2>}

      {data && <h2>{data.content}</h2>}
    </div>
  );
};

export default Quote;
