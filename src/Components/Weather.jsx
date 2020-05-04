import React, { useState, useEffect, useRef } from 'react'

import City from './CityWeather';
import CitySearch from './CitySearch';
import styles from './css/style.css';

function Weather(){
  const isFirstRun = useRef(true);               // To avoid the first run. useEffect will run ONLY if the client 
                                                   // clicks the button

  const [error, setError] = useState(null);
  const [cityToSearch, setCityToSearch] = useState("");
  const [validCity, setValidCity] = useState(true);
  const [city, setCity] = useState({ 
    city: "",
    country: "",
    weatherMain: "",
    weatherDescription: "",
    minTemp: "",
    maxTemp: "",
    position: ""
   });

  const URL = `http://api.openweathermap.org/data/2.5/weather?q=${cityToSearch}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`;

  let cityInfoToShow = "";        // Displays the city General Info

  useEffect(() => {
    if (isFirstRun.current) {          // This if just checks the first render and skips it fom the fetch
      isFirstRun.current = false;
      return;
    }

    fetch(URL)
      .then(res => {
        if (res.ok){
          setError(null);
          return res.json();
        }
        else 
          throw Error(`Error catching the API. Possibly unkown city name.`);
      })
      .then(apiData => {
          setCity({
            city: apiData.name,
            country: apiData.sys.country,
            weatherMain: apiData.weather[0].main,
            weatherDescription: apiData.weather[0].description,
            minTemp: apiData.main.temp_min,
            maxTemp: apiData.main.temp_max,
            position: apiData.coord
          });
      })
      .catch(err => {
        setError(err.message);
      })
  }, [cityToSearch]);


  const searchCity = city => {
    if(isValid(city.name)){ 
      setCityToSearch(city.name);
      setValidCity(true);
    } else
      setValidCity(false);
  }

  function isValid(str){
    return !/[~`!#$%\^&*+=\-\[\]\\;,/{}|\\":<>\?0-9]/g.test(str);
   }

  const errorCityNameShow = (cityToCheck, valid) => {
    if(!valid)
      return <p className="WarningMsg">The city name is not valid. Please try again with different name.</p>;
    else if(cityToCheck.trim() === "")
      return <p className="WarningMsg">You must write a city name.</p>;

    return "";
  }

  const cityToShow = (err) => {
    if(err !== null)                 // Checks for error in the fetch
      return <p className="WarningMsg">{err}</p>; 
    else if(city.city.trim() === "") // If there are no errors, checks if it is the first time, when no fetch has been done
      return "";
    else
      return <City
        city={city.city}
        country={city.country}
        weatherMain={city.weatherMain}
        weatherDescription={city.weatherDescription}
        minTemp={city.minTemp}
        maxTemp={city.maxTemp}
        position={city.position}
    />;
  }  

  const validationErrorMessage = errorCityNameShow(cityToSearch, validCity);
  
  if (validationErrorMessage === "")         // Only shows the info of the city if it has passed the validation process
    cityInfoToShow = cityToShow(error);

  return (
    <div className="ListContainer">
      <CitySearch searchCity={searchCity}/>
      { validationErrorMessage }
      { cityInfoToShow }
    </div>
  )
}

export default Weather