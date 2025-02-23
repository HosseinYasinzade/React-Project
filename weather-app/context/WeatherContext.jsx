import { createContext, useContext, useState } from "react";
import axios from "axios";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=26b37bd800c643eeb3c153355252202&q=${search}`
      );
      setResult(response.data);
      setError(null);
    } catch (err) {
      setError(err);
      setResult(null);
    }
  };

  return (
    <WeatherContext.Provider
      value={{ search, error, result, handleChange, handleSubmit }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
