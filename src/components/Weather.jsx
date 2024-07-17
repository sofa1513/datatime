/* import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Weather = ({ city }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (city && city !== 'Loading...' && city !== 'Unknown') {
      const fetchWeather = async () => {
        try {
          const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8d51c1292fb8c3f24791fcfd1a5239af&units=metric`);
          setWeather(response.data);
        } catch (error) {
          console.error('Error fetching weather data:', error);
        }
      };
      fetchWeather();
    }
  }, [city]);

  return (
    <div className="weather">
      {weather ? (
        <div>
          <h3>Weather in {city}</h3>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Condition: {weather.weather[0].description}</p>
        </div>
      ) : (
        <p>Loading weather...</p>
      )}
    </div>
  );
};

export default Weather; */

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Weather.css';

const generateRandomColor = () => {
  const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'cyan'];
  return colors[Math.floor(Math.random() * colors.length)];
};

const generateWeatherSymbols = (symbol) => {
  return Array.from({ length: 20 }, (_, index) => (
    <span key={index} style={{ color: generateRandomColor() }}>{symbol}</span>
  ));
};

const Weather = ({ city }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (city && city !== 'Loading...' && city !== 'Unknown') {
      const fetchWeather = async () => {
        try {
          const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8d51c1292fb8c3f24791fcfd1a5239af&units=metric`);
          setWeather(response.data);
        } catch (error) {
          console.error('Error fetching weather data:', error);
        }
      };
      fetchWeather();
    }
  }, [city]);

  const getWeatherSymbol = (condition) => {
    if (condition.includes('rain')) return '☔';
    if (condition.includes('clear')) return '☀️';
    if (condition.includes('cloud')) return '☁️';
    if (condition.includes('snow')) return '❄️';
    if (condition.includes('storm')) return '⚡';
    if (condition.includes('mist')) return '🌫️';
    return '🌈'; // Для остальных условий
  };

  return (
    <div className="weather">
      {weather ? (
        <div>
          <h3>Weather in {city}</h3>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Condition: {weather.weather[0].description}</p>
          <div className="weather-symbols">
            {generateWeatherSymbols(getWeatherSymbol(weather.weather[0].description))}
          </div>
          <div className="weather-symbols">
            {generateWeatherSymbols(getWeatherSymbol(weather.weather[0].description))}
          </div>
        </div>
      ) : (
        <p>Loading weather...</p>
      )}
    </div>
  );
};

export default Weather;

