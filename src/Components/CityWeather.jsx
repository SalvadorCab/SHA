import React from 'react'

function CityWeather(props) {

    return (
        <div className="CityWeather">
            <p className="City-Country">{props.city}, {props.country}</p>
            <p className="MainWeatherTitle">{props.weatherMain} </p>
            <p className="DescWeatherTitle">{props.weatherDescription}</p>
            <p className="MinTemp">min temp: &nbsp;&nbsp;{props.minTemp}</p>
            <p className="MaxTemp">max temp: &nbsp;&nbsp;{props.maxTemp}</p>
            <p className="Location">location: &nbsp;&nbsp;{props.position.lon}, {props.position.lat}</p>
        </div>
    )
}

export default CityWeather
