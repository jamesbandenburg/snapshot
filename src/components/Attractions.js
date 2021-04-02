import React, { Component } from 'react'
import Attraction from './Attraction'
import Collapse from 'react-bootstrap/Collapse'

export default class Attractions extends Component {

    state = {
        city: this.props.city,
        lat: '',
        lon: '',
        apiKey: '5ae2e3f221c38a28845f05b6c295fae5c08fb4da416353d38a0bff8a',
        attractionData: [],
        loading: true,
        appear: false
    }

    async componentDidMount() {
        this.setState({ appear: true })
        
        let locationsUrl = ` https://api.opentripmap.com/0.1/en/places/geoname?name=${this.state.city}&apikey=${this.state.apiKey}`
        try {
        let getLatLon = await fetch(locationsUrl);
        if (getLatLon.ok) {
            let latLonData = await getLatLon.json();
            this.setState({ lat: latLonData.lat, lon: latLonData.lon });
            
            let attractionsUrl = `https://api.opentripmap.com/0.1/en/places/radius?radius=10000&lon=${this.state.lon}&lat=${this.state.lat}&src_geom=osm&format=json&limit=6&apikey=${this.state.apiKey}`

            try {
            let res = await fetch(attractionsUrl);
            if (res.ok) {
                let attData = await res.json()
                this.setState({ attractionData: attData, loading: false })
            }

        } catch (error) {
            console.log(error)
        }}


    } catch (error) {
        
    }
        
    }

    render() {
        return (
            <Collapse in={this.state.appear}>
            <div className="container-flex jumbotron" style={{ textAlign: "center", margin: "0", paddingTop: "0", backgroundColor: "#8bacb7" }}>
                <h3 style={{ marginTop: "0", paddingTop: "10px" }}>Top things to see in {this.state.city}:</h3>
                {this.state.loading === false && 
                <div className="container-flex justify-content-center" style={{textAlign: "center"}}>
                    <div className="row" style={{ margin: "16px auto" }}>
                        
                        {this.state.attractionData.map((attraction, i) => 
                        <div className="col-md-2" style={{ margin: "16px 0" }}>
                            <Attraction attData={attraction} key={i} />
                        </div>
                        )}
                    </div>
                </div>
                }
            
            </div>
            </Collapse>
        )
    }
}
