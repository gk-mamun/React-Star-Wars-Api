import React from 'react';
import { Link } from 'react-router-dom';


const PlanetGrid = ({planet, id}) => {

    return (
        <div className="item-card">
            <p>Planet-{id}</p>
            <h1>{planet.name}</h1>
            <Link className="detail-btn" to={`/planets/${id}`}>Detail</Link>
        </div>
        
    )
}
 
export default PlanetGrid;