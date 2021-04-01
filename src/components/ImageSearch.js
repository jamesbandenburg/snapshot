import React, { Component } from 'react'

export default class ImageSearch extends Component {

    state = {
        city: this.props.city,
        cx: '7524c3bb418745ff3',
        apiKey: 'AIzaSyCYa-2ug1dTRJ-aO3tz61Qcqe_WHWVwSfo',
        imgUrl: ''
    }

    async componentDidMount() {
    const imgSearchUrl = `https://www.googleapis.com/customsearch/v1?q=${this.state.city}&num=1&searchType=image&key=${this.state.apiKey}&cx=${this.state.cx}`

        try {
            const imgRes = await fetch(imgSearchUrl)
                if (imgRes.ok) {
                    const imgJson = await imgRes.json()
                    console.log(imgJson)
                    this.setState({ imgUrl: imgJson.items[0].link })
                    this.props.imgPath(this.state.imgUrl)
                    this.forceUpdate()
                    
                }
        } catch (error) {
            console.log(error)
        }

    }
    

    render() {
        return (
            <React.Fragment />
        )
    }
}
