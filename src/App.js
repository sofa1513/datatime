import React, { useEffect, useState } from 'react';
import Grid from './components/Grid';
import useCity from './components/UseCity';
import DateTimeDisplay from './components/DateTimeDisplay';
import Weather from './components/Weather';

const App = () => {
  const [dateTime, setDateTime] = useState(new Date());
  const [colorScheme, setColorScheme] = useState('default');
  const [showWeather, setShowWeather] = useState(false);
  const city = useCity();

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const { day, date, time } = DateTimeDisplay({ dateTime });

  const handleColorSchemeChange = (e) => {
    setColorScheme(e.target.value);
  };

  const handleShowWeather = () => {
    setShowWeather(!showWeather);
  };

  return (
    <div className="App">
      <div className="controls">
        <label htmlFor="colorScheme">Style </label>
        <select id="colorScheme" value={colorScheme} onChange={handleColorSchemeChange}>
          <option value="default">Base</option>
          <option value="scheme1">Special</option>
          <option value="scheme2">Super</option>
        </select>
        <button onClick={handleShowWeather}>
          {showWeather ? 'Hide Weather' : 'Show Weather'}
        </button>
      </div>
      <Grid 
        day={day} 
        date={date} 
        time={time} 
        city={city} 
        colorScheme={colorScheme}
        />
        {showWeather && <Weather city={city} />} 
    </div>
  );
};

export default App;