import React from "react";
import { useWeather } from "../../hooks/useWeather";

const WeatherDisplay = () => {
  const { search, error, result, handleChange, handleSubmit } = useWeather();

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={search} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>

      <div>
        {error && <p>{error.message}</p>}
        {result ? <h1>{result.location.name}</h1> : <h1>City Name</h1>}
        {result ? <h2>{result.current.temp_c}°C</h2> : <h2>Temp</h2>}
      </div>
    </div>
  );
};

export default WeatherDisplay;
