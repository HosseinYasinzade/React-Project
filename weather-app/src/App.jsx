import Weather from "./Components/Weather";
import { WeatherProvider } from "../context/WeatherContext";

function App() {
  return (
    <>
      <WeatherProvider>
        <Weather />
      </WeatherProvider>
    </>
  );
}

export default App;
