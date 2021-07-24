import React, { Fragment } from 'react'
import Modal from 'react-bootstrap/Modal'


class Searchbar extends React.Component {
    state = {
        text: '',
        isSearched: false,
        aboutClicked: false,
        inputDisabled: false,
        showAboutModal: false
       
    }

    onChange = (e) => {
            this.setState({ text: e.target.value });
            if (e.target.value === '') {
                this.setState({ isSearched: false })
            }
        }

    submitSearch = (e) => {
        e.preventDefault()
        if (this.state.text !== e.target.value) {
            this.props.searched(false)
        }
    if (this.state.text === '') {
        this.props.searched(false)
    } else {
        this.props.city(this.state.text)
        this.setState({ isSearched: true, inputDisabled: true })
        this.props.searched(true)
        
        
    }   

}

newSearch = () => {
    this.setState({ isSearched: false, text: '', inputDisabled: false })
}

showAbout = (e) => {
    e.preventDefault()
    this.setState({ showAboutModal: true })
}

hideAbout = () => {
    
    this.setState({ showAboutModal: false })
}

render() 
    {
        return (
            
           <Fragment>
                <div className="container align-middle">
                    
                    <form id="searchbar" style={{width: "400px", margin: "0 auto"}}>
                    <input type="text" id="search-field" className="form-control" name="text" value={this.state.text} onChange={this.onChange} disabled={this.state.inputDisabled} placeholder="Enter a city..."/>

                    {!this.state.isSearched ?
                    <input type="submit" className="btn btn-primary" style={{margin: "20px"}} onClick={this.submitSearch} value="Go" /> 
                    : <input type="submit" value="New Search" style={{margin: "20px"}} className="btn btn-primary" onClick={this.newSearch} />
                    
                    }       
                    <button className="btn btn-primary" style={{margin: "20px"}} onClick={this.showAbout}>About</button>
                    </form>
                    
                </div>
                <Modal show={this.state.showAboutModal} onHide={this.hideAbout} >
                <Modal.Header style={{backgroundColor: "#8bacb7", color: "seashell", fontWeight: "bold", fontSize: "2rem"}}>About Snapshot</Modal.Header>
                <Modal.Body style={{backgroundColor: "#8bacb7", color: "seashell"}}>
                     <p>Weather and travel information using the OpenWeatherMap, OpenTripMap and Google Search APIs.</p>
                    <p>This app is very much at the mercy of the data returned by the APIs, and is therefore quite easy to break depending on what you search for.</p>
                    <p>Please do not use it to plan your trips with...</p>
                    <div className="d-flex justify-content-between">
                    <p>v1.1.0 || <a target="_blank" href="https://github.com/jamesbandenburg/snapshot" style={{color: "seashell", textDecoration: "underline"}}>Source Code</a></p>
                    <button className="btn btn-primary" onClick={this.hideAbout}>Close</button>
                    </div>
                </Modal.Body>
               
            </Modal>
            </Fragment> 
        
    )}
    
}

export default Searchbar