import React, { Component } from 'react'

class CityWeather extends Component {

    render() {
        return (
            <div className = "CityWeather">
                <p className="City-Country">{ this.props.city }, { this.props.country }</p>
                <p className="MainWeatherTitle">{ this.props.weatherMain } </p>
                <p className="DescWeatherTitle">{ this.props.weatherDescription }</p>
                <p className="MinTemp">min temp: &nbsp;&nbsp;{ this.props.minTemp }</p>
                <p className="MaxTemp">max temp: &nbsp;&nbsp;{ this.props.maxTemp }</p>
                <p className="Location">location: &nbsp;&nbsp;{ this.props.position.lon }, { this.props.position.lat }</p>
            </div>
        )
    }
}

/*
city  country  weatherMain  weatherDescription  minTemp  maxTemp  position  key
*/

export default CityWeather
