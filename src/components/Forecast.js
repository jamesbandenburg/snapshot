import React from 'react'


// Tidy up/refactor code in here




const Forecast = (props) => {

    const forecast = props.weatherData
  

    const date = (data) => {
        const timestamp = (data.dt * 1000)
        const dateObject = new Date(timestamp);
        return dateObject.toLocaleDateString()
    }

    
   
    return (
        <div className="container-flex" id="forecast-display">
            <ul className="list-group list-group-horizontal list-inline justify-content-around">
                <li className="list-group-item" style={{ width: "110px", height: "160px", margin: "10px", backgroundColor: "seashell", color: "darkslategrey" }}>
                    <h6>Today</h6>
                    <i className={
                    (forecast[0].weather[0].main === 'Clouds') ? "fas fa-cloud" :
                        (forecast[0].weather[0].main === 'Clear') ? "fas fa-sun": 
                            (forecast[0].weather[0].main === 'Rain') ? "fas fa-cloud-rain" : 
                            (forecast[0].weather[0].main === 'Snow') ? "fas fa-snowflake" : 
                            (forecast[0].weather[0].main === 'Mist') ? "fas fa-smog" : 
                            (forecast[0].weather[0].main === 'Thunderstorm') ? "fas fa-bolt" : 
                                "fas fa-cloud-sun-rain"
                    }></i>
                    <p><i className="fas fa-temperature-high"></i> {Math.floor((forecast[0].temp.max) - 273)}</p>
                    <p><i className="fas fa-temperature-low"></i> {Math.floor((forecast[0].temp.min) - 273)}</p>
                </li>
                <li className="list-group-item" style={{ width: "110px", height: "160px", margin: "10px", backgroundColor: "seashell", color: "darkslategrey" }}>
                <h6>{date(forecast[1])}</h6>
                <i className={
                    (forecast[1].weather[0].main === 'Clouds') ? "fas fa-cloud" :
                        (forecast[1].weather[0].main === 'Clear') ? "fas fa-sun": 
                            (forecast[1].weather[0].main === 'Rain') ? "fas fa-cloud-rain" : 
                            (forecast[1].weather[0].main === 'Snow') ? "fas fa-snowflake" : 
                            (forecast[1].weather[0].main === 'Mist') ? "fas fa-smog" : 
                            (forecast[1].weather[0].main === 'Thunderstorm') ? "fas fa-bolt" : 
                                "fas fa-cloud-sun-rain"
                    }></i>
                    <p><i className="fas fa-temperature-high"></i>{Math.floor((forecast[1].temp.max) - 273)}</p>
                    <p><i className="fas fa-temperature-low"></i>{Math.floor((forecast[1].temp.min) - 273)}</p>
                </li>
                <li className="list-group-item" style={{ width: "110px", height: "160px", margin: "10px", backgroundColor: "seashell", color: "darkslategrey" }}>
                <h6>{date(forecast[2])}</h6>
                <i className={
                    (forecast[2].weather[0].main === 'Clouds') ? "fas fa-cloud" :
                        (forecast[2].weather[0].main === 'Clear') ? "fas fa-sun": 
                            (forecast[2].weather[0].main === 'Rain') ? "fas fa-cloud-rain" : 
                            (forecast[2].weather[0].main === 'Snow') ? "fas fa-snowflake" : 
                            (forecast[2].weather[0].main === 'Mist') ? "fas fa-smog" : 
                            (forecast[2].weather[0].main === 'Thunderstorm') ? "fas fa-bolt" : 
                                "fas fa-cloud-sun-rain"
                    }></i>
                    <p><i className="fas fa-temperature-high"></i>{Math.floor((forecast[2].temp.max) - 273)}</p>
                    <p><i className="fas fa-temperature-low"></i>{Math.floor((forecast[2].temp.min) - 273)}</p>
                </li>
                <li className="list-group-item" style={{ width: "110px", height: "160px", margin: "10px", backgroundColor: "seashell", color: "darkslategrey" }}>
                <h6>{date(forecast[3])}</h6>
                <i className={
                    (forecast[3].weather[0].main === 'Clouds') ? "fas fa-cloud" :
                        (forecast[3].weather[0].main === 'Clear') ? "fas fa-sun": 
                            (forecast[3].weather[0].main === 'Rain') ? "fas fa-cloud-rain" : 
                            (forecast[3].weather[0].main === 'Snow') ? "fas fa-snowflake" : 
                            (forecast[3].weather[0].main === 'Mist') ? "fas fa-smog" : 
                            (forecast[3].weather[0].main === 'Thunderstorm') ? "fas fa-bolt" : 
                                "fas fa-cloud-sun-rain"
                    }></i>
                    <p><i className="fas fa-temperature-high"></i>{Math.floor((forecast[3].temp.max) - 273)}</p>
                    <p><i className="fas fa-temperature-low"></i>{Math.floor((forecast[3].temp.min) - 273)}</p>
                </li>
                <li className="list-group-item" style={{ width: "110px", height: "160px", margin: "10px", backgroundColor: "seashell", color: "darkslategrey" }}>
                <h6>{date(forecast[4])}</h6>
                <i className={
                    (forecast[4].weather[0].main === 'Clouds') ? "fas fa-cloud" :
                        (forecast[4].weather[0].main === 'Clear') ? "fas fa-sun": 
                            (forecast[4].weather[0].main === 'Rain') ? "fas fa-cloud-rain" : 
                            (forecast[4].weather[0].main === 'Snow') ? "fas fa-snowflake" : 
                            (forecast[4].weather[0].main === 'Mist') ? "fas fa-smog" : 
                            (forecast[4].weather[0].main === 'Thunderstorm') ? "fas fa-bolt" : 
                                "fas fa-cloud-sun-rain"
                    }></i>
                    <p><i className="fas fa-temperature-high"></i>{Math.floor((forecast[4].temp.max) - 273)}</p>
                    <p><i className="fas fa-temperature-low"></i>{Math.floor((forecast[4].temp.min) - 273)}</p>
                </li>
                <li className="list-group-item" style={{ width: "110px", height: "160px", margin: "10px", backgroundColor: "seashell", color: "darkslategrey" }}>
                <h6>{date(forecast[5])}</h6>
                <i className={
                    (forecast[5].weather[0].main === 'Clouds') ? "fas fa-cloud" :
                        (forecast[5].weather[0].main === 'Clear') ? "fas fa-sun": 
                            (forecast[5].weather[0].main === 'Rain') ? "fas fa-cloud-rain" : 
                            (forecast[5].weather[0].main === 'Snow') ? "fas fa-snowflake" : 
                            (forecast[5].weather[0].main === 'Mist') ? "fas fa-smog" : 
                            (forecast[5].weather[0].main === 'Thunderstorm') ? "fas fa-bolt" : 
                                "fas fa-cloud-sun-rain"
                    }></i>
                    <p><i className="fas fa-temperature-high"></i>{Math.floor((forecast[5].temp.max) - 273)}</p>
                    <p><i className="fas fa-temperature-low"></i>{Math.floor((forecast[5].temp.min) - 273)}</p>
                </li>
                <li className="list-group-item" style={{ width: "110px", height: "160px", margin: "10px", backgroundColor: "seashell", color: "darkslategrey" }}>
                <h6>{date(forecast[6])}</h6>
                <i className={
                    (forecast[6].weather[0].main === 'Clouds') ? "fas fa-cloud" :
                        (forecast[6].weather[0].main === 'Clear') ? "fas fa-sun": 
                            (forecast[6].weather[0].main === 'Rain') ? "fas fa-cloud-rain" : 
                            (forecast[6].weather[0].main === 'Snow') ? "fas fa-snowflake" : 
                            (forecast[6].weather[0].main === 'Mist') ? "fas fa-smog" : 
                            (forecast[6].weather[0].main === 'Thunderstorm') ? "fas fa-bolt" : 
                                "fas fa-cloud-sun-rain"
                    }></i>
                    <p><i className="fas fa-temperature-high"></i>{Math.floor((forecast[6].temp.max) - 273)}</p>
                    <p><i className="fas fa-temperature-low"></i>{Math.floor((forecast[6].temp.min) - 273)}</p>
                </li>
                <li className="list-group-item" style={{ width: "110px", height: "160px", margin: "10px", backgroundColor: "seashell", color: "darkslategrey" }}>
                <h6>{date(forecast[7])}</h6>
                <i className={
                    (forecast[7].weather[0].main === 'Clouds') ? "fas fa-cloud" :
                        (forecast[7].weather[0].main === 'Clear') ? "fas fa-sun": 
                            (forecast[7].weather[0].main === 'Rain') ? "fas fa-cloud-rain" : 
                            (forecast[7].weather[0].main === 'Snow') ? "fas fa-snowflake" : 
                            (forecast[7].weather[0].main === 'Mist') ? "fas fa-smog" : 
                            (forecast[7].weather[0].main === 'Thunderstorm') ? "fas fa-bolt" : 
                                "fas fa-cloud-sun-rain"
                    }></i>
                    <p><i className="fas fa-temperature-high"></i>{Math.floor((forecast[7].temp.max) - 273)}</p>
                    <p><i className="fas fa-temperature-low"></i>{Math.floor((forecast[7].temp.min) - 273)}</p>
                </li>
            </ul>
        </div>
    )
} 

export default Forecast
