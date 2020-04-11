import React, { useState, useEffect } from 'react';
import axios from 'axios';

const api_key = process.env.REACT_APP_API_KEY
const api_url = `http://api.weatherstack.com/current?access_key=${api_key}&units=m&query=`


export default ({ country: { name, capital = '', population, languages, flag } }) => {

  const [currentWeather, setCurrentWeather] = useState({})
  useEffect(() => {
    axios
      .get(api_url + capital)
      .then(weather => {
        // console.log(weather)
        setCurrentWeather(!weather.data.error ? weather.data.current : {})
      })
  }, [capital])

  return (
    <div>
      <h1>{name}</h1>
      <div>Capital {capital}</div>
      <div>Population {population}</div>
      <h2>Languages</h2>
      <ul>
        {languages.map(language => <li key={language.name}>{language.name}</li>)}
      </ul>
      <div><img style={{ width: 200 }} alt="flag" src={flag} /></div>
      <h2>Weather in {capital}</h2>
      {currentWeather.weather_icons && currentWeather.weather_icons.map(
        icon => <img key={icon} style={{ width: 200 }} alt="weather" src={icon} />
      )}
      <div>Temperature {currentWeather.temperature} C (feels like {currentWeather.feelslike})</div>
      <div>Wind {currentWeather.wind_speed && Math.round(currentWeather.wind_speed / 0.36) / 10} m/s (direction {currentWeather.wind_dir})</div>
      <div>Humidity {currentWeather.humidity} %</div>
      <div>UV index {currentWeather.uv_index}</div>
    </div>
  )
};
