import { useState } from "react";
import axios from "axios";

const Weather = () => {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .get(
        `https://api.weatherapi.com/v1/current.json?key=26b37bd800c643eeb3c153355252202&q=${search}`
      )
      .then((response) => {
        setResult(response.data);
        setError(null);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={search} onChange={handleChange} />
        <button>Search</button>
      </form>
      <div>
        {error && <p>error.message</p>}
        {result ? <h1>{result.location.name}</h1> : <h1>City Name</h1>}
        {result ? <h2>{result?.current.temp_c}</h2> : <h2>Weather</h2>}
      </div>
    </div>
  );
};

export default Weather;
