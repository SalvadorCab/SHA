import React, { Component } from 'react'

import City from './CityWeather';
import listFile from '../city-weather.json'

class Weather extends Component {

    render() {
        //console.log(listFile[0].name);

        return (
          <div className="ListContainer">
              { listFile.map((element, index) => <City 
                city ={ element.name } 
                country = { element.sys.country } 
                weatherMain = { element.weather[0].main } 
                weatherDescription = { element.weather[0].description } 
                minTemp = { element.main.temp_min } 
                maxTemp = { element.main.temp_max } 
                position = { element.coord }
                key ={ index }/>) 
              }
          </div>
        )
    }
}

export default Weather
