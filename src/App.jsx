import { useState } from "react";

const App = () => {
  const APIKEY = "401264767619fc7cfcdb8bf8f6473d21";
  const [city, setCity] = useState("");
  const [weatherdata, setWeatherdata] = useState(null);
  const handleChange = (e) => {
    setCity(e.target.value);
    console.log(e.target.value);
  };
  const handleSearch = async () => {
    await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setWeatherdata(data);
        console.log(data);
      });
  };
  return (
    <div>
      <div>
        <input type="text" value={city} onChange={handleChange} />
        <button onClick={handleSearch}>Search</button>
      </div>
      {weatherdata && (
        <>
          <div>{weatherdata.weather[0].main}</div>
        </>
      )}
    </div>
  );
};

export default App;
