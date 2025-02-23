import React from "react";
import { useWeather } from "../../hooks/useWeather";

const WeatherDisplay = () => {
  const { search, error, result, handleChange, handleSubmit } = useWeather();

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          value={search}
          onChange={handleChange}
          className="search_input"
        />
        <button type="submit" className="search_btn">
          Search
        </button>
      </form>

      <div>
        {error && <p>{error.message}</p>}
        {result ? (
          <h1 className="location">{result.location.name}</h1>
        ) : (
          <h1 className="location">City Name</h1>
        )}
        {result ? (
          <h2 className="temp">{result.current.temp_c}°C</h2>
        ) : (
          <h2 className="temp">Temp</h2>
        )}
      </div>
    </div>
  );
};

export default WeatherDisplay;
