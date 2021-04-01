import React from 'react'
import '../App.css'

const Attraction = (props) => {

    const attData = props.attData

    let categories = []

    const getCategories = (attData) => {
        if (attData.kinds.includes('interesting_places')) 
            {categories.push('Interesting Places')};
        if (attData.kinds.includes('cultural')) {
            categories.push('Cultural')};
        if (attData.kinds.includes('historic')) {
            categories.push('Historic')};
        if (attData.kinds.includes('natural')) {
            categories.push('Natural')}
        if (attData.kinds.includes('architecture')) {
            categories.push('Architecture')}
        if (attData.kinds.includes('tourist_facilities')) {
            categories.push('Facilities & Amenities')}
        if (attData.kinds.includes('religion')) {
            categories.push('Religion')}
    }

    getCategories(attData)

    let categoriesString = categories.join(', ')

    return (
        <div className="card App">
            <div className="card-body" style={{ width: "18rem", height: "auto", backgroundColor: "seashell", color: "darkslategrey", padding: "10px", borderRadius: "5px", border: "1px solid #DDDDDD" }}>
                <h3 className="card-title">{attData.name}</h3>
                <p className="card-text" style={{ fontSize: "1.5em" }}>Rating: {attData.rate}/10</p>
                <p className="card-text" style={{ fontSize: "1.5em" }}>Tags: {categoriesString}</p>
            </div>
        </div>
    )
}

export default Attraction
