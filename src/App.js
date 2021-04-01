import React from 'react';
import Searchbar from './components/Searchbar'
import Weather from './components/Weather'
import background from './default-bg.jpg'
import Attractions from './components/Attractions'
import ImageSearch from './components/ImageSearch'
import './App.css'
import About from './components/About'

class App extends React.Component {

  state = {
    city: '',
    searched: false,
    lat: '',
    lon: '',
    imgPath: background,
    mainHeight: '596px',
    showAbout: false

  }

  city = (text) => {
    if (this.state.city !== text) {
      this.forceUpdate()
    }
    this.setState({ city: text, mainHeight: '400px' })
  }

  searched = (isSearched) => {
    this.setState({ searched: isSearched })
    
  }


  imgPath = (imgUrl) => {
    
    if (this.state.imgPath !== imgUrl) {
      this.setState({ imgPath: imgUrl })
      this.forceUpdate()
    }
    
    
    
  }

render() {
  return (
    <div className="App">
  
      <div className="jumbotron justify-content-center align-items-center backgroundspread" style={{textAlign: "center", height: this.state.mainHeight, backgroundImage: `url(${this.state.imgPath})`, backgroundSize: "100%", backgroundPosition: "bottom", margin: "0", borderBottom: "5px solid darkslategrey"}}>
        <div className="container" style={{ width: "37%", backgroundColor: "#8bacb7", opacity: "0.75", padding: "0 50px 10px 40px", borderRadius: "20px" }}>
        <span style={{ fontSize: "6em", fontWeight: "bold" }}>Snapshot</span>
        <h4 style={{ fontWeight: "bold" }}>The world at a glance</h4>
        </div>
        <br></br>

        <Searchbar city={this.city} searched={this.searched} />
      </div>

      {this.state.searched === true && 
      <div>
      <Weather city={this.state.city} />
      <Attractions city={this.state.city} />
      <About />
      <ImageSearch city={this.state.city} imgPath={this.imgPath} />
      </div>
      }

    </div>
  );
}}

export default App;
