// src/components/WeatherDisplay.js
import React from 'react';

const WeatherDisplay = ({ data, location }) => {
  return (
    <div>
      <h2>Weather in {location}</h2>
      <p>Temperature: {data.main.temp} °C</p>
      <p>Weather: {data.weather[0].description}</p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Wind Speed: {data.wind.speed} m/s</p>
    </div>
  );
};

export default WeatherDisplay;
