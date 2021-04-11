import React, { Component } from 'react'
import Forecast from './Forecast'
import '../App.css'
import Collapse from 'react-bootstrap/Collapse'


class Weather extends Component {
    state = {
        city: this.props.city,
        appid: 'c7bc5e66aeda3684fd3c705978872426',
        endpoint: 'https://api.openweathermap.org/data/2.5/forecast?',
        secondEndpoint: 'https://api.openweathermap.org/data/2.5/onecall?',
        temp: '',
        lat: '',
        lon: '',
        loading: true,
        noResults: '',
        appear: false,
        weatherData: ''
    
    }

    getWeather = async () => {
        
        let weatherUrl = `${this.state.endpoint}q=${this.state.city}&appid=${this.state.appid}`
        try {
            const response = await fetch(weatherUrl)
            if (response.ok) {
                const jsonResponse = await response.json()
                this.setState({ temp: Math.floor((jsonResponse.list[0].main.temp - 273)), lat: jsonResponse.city.coord.lat, lon: jsonResponse.city.coord.lon })
                const dailyForecastUrl = `${this.state.secondEndpoint}lat=${this.state.lat}&lon=${this.state.lon}&exclude=current,minutely,hourly&appid=${this.state.appid}`
                try {
                    const secondResponse = await fetch(dailyForecastUrl)
                    if (response.ok) {
                        const dailyData = await secondResponse.json()
                        this.setState({ weatherData: dailyData, loading: false }).bind(this)
                    
                        
                        
                    } else {
                        this.setState({ loading: false, noResults: 'Oops, nothing found! Try a different search.' })
                    }
                } catch (err) {
                    this.setState({ loading: false })
                }
               
                
    
            } 
            
        } catch (err) {
            this.setState({ loading: false, noResults: 'Oops, nothing found! Try a different search.' })
        }
    }
    
    componentDidMount() {
        this.setState({ city: this.props.city, appear: true, loading: false })
        this.getWeather()
    }

    componentDidUpdate() {
        if (this.state.city !== this.props.city) {
            this.setState({ city: this.props.city, loading: true })
        }
    }

    render() {
        return (
            
            <Collapse in={this.state.appear}>
            <div className="jumbotron App" id="weather-display" style={{textAlign: "center", margin: "0", paddingBottom: "24px", backgroundColor: "#8bacb7"}}>
                <div>
                <h3>Weather for next week in {this.state.city}:</h3>
                </div>
                {this.state.weatherData && this.state.loading === false ? 
                <Forecast weatherData={this.state.weatherData.daily} />
               
            : 
                
                <img src="../spinner.gif" alt="Getting data..."></img> 
                 }
                 {this.state.noResults !== '' && 
                <h3>{this.state.noResults}</h3>
                }
            </div>
           </Collapse>
        )
    }
}

export default Weather