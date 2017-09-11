import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/sparkline';

class WeatherList extends Component {
    renderWeather(cityData) {
        const cityName = cityData.city.name;
        const cityTemps = cityData.list.map(x => x.main.temp);
        const cityPres = cityData.list.map(x => x.main.pressure);
        const cityHumid = cityData.list.map(x => x.main.humidity);


        return (
            <tr key={cityName}>
                <td>{cityName}</td>
                <td>
                    <Chart data={cityTemps} color={'green'} />
                </td>
                <td>
                    <Chart data={cityPres} color={'blue'} />
                </td>
                <td>
                    <Chart data={cityHumid} color={'black'} />
                </td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Tempreature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({ weather }) {
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);