import React, { Component } from 'react'
import { connect } from 'react-redux'
import Chart from '../components/chart'
import GoogleMap from '../components/google-map'

class WeatherList extends Component {
    renderWeather(cityData) {
        const temps = cityData.list.map(weather => weather.main.temp)
        const pressures = cityData.list.map(weather => weather.main.pressure)
        const humidities = cityData.list.map(weather => weather.main.humidity)
        const {lon, lat} = cityData.city.coord
        return(
            <tr key={cityData.city.name}>
                <td><GoogleMap lat={lat} lon={lon}/></td>
                <td>
                    <Chart color="red" data={temps} units="k"/>
                </td>
                <td>
                    <Chart color="blue" data={pressures} units="hPa"/>
                </td>
                <td>
                    <Chart color="green" data={humidities} units="%"/>
                </td>
            </tr>
        )
    }
    render() {
        return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>
                        City
                    </th>
                    <th>
                        Temperature
                    </th>
                    <th>
                        Pressure
                    </th>
                    <th>
                        Humidity
                    </th>
                </tr>
            </thead>
            <tbody>
                {this.props.weather.map(this.renderWeather)}
            </tbody>
        </table>
        )
    }
}

const mapStateToProps = ({ weather }) => {
    return {
        weather
    }
}

export default connect(mapStateToProps)(WeatherList)
