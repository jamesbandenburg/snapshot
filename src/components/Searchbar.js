import React from 'react'


class Searchbar extends React.Component {
    state = {
        text: '',
        isSearched: false,
        aboutClicked: false,
        inputDisabled: false
       
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

render() 
    {
        return (
       
            <div className="container align-items-center">
                
                <form id="searchbar" style={{width: "400px", margin: "0 auto"}}>
                <input type="text" id="search-field" className="form-control" name="text" value={this.state.text} onChange={this.onChange} disabled={this.state.inputDisabled} placeholder="Enter a city..."/>

                {!this.state.isSearched ?
                <input type="submit" className="btn btn-primary" style={{margin: "20px"}} onClick={this.submitSearch} value="Go" /> 
                : <input type="submit" value="New Search" style={{margin: "20px"}} className="btn btn-primary" onClick={this.newSearch} />
                
                }       
                </form>
            </div>
        
    )}
    
}

export default Searchbar