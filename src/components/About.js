import React, { Fragment } from 'react'
import App from '../App.css'

const About = () => {


    return (
        <Fragment>
                <div className="App" style={{margin: "0", padding: "24px 0", backgroundColor: "#8bacb7", fontSize: "1.5rem"}}>
                    <h4>About Snapshot</h4>
                    <p>Weather and travel information using the OpenWeatherMap, OpenTripMap and Google Search APIs.</p>
                    <p>This app is very much at the mercy of the data returned by the APIs, and is therefore quite easy to break depending on what you search for.</p>
                    <p>Please do not use it to plan your trips with...</p>
                </div>
            
        </Fragment>
    )
}

export default About
