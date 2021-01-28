import React from 'react';
import { Link } from 'react-router-dom';

const ShipGrid = ({ ship, id}) => {
    return ( 
        <div className="item-card">
            <p>Starship-{id }</p>
            <h1>{ship.name}</h1>
            <Link className="detail-btn" to={`/spaceships/${id}`}>Detail</Link>
        </div>
     );
}
 
export default ShipGrid;