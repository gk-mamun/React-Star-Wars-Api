import React  from 'react';
import { useParams, Link } from 'react-router-dom';
import useSingleFetch from '../useSingleFetch';
import Spinner from './Spinner';

const SpaceshipDetail = () => {
    const { id } = useParams();

    const { data: ship, error, isLoading } = useSingleFetch('https://swapi.dev/api/starships/'+id);

    return ( 
        <div className="container">
            { isLoading && <Spinner /> }
            { ship && <div>
                        <div className="detail-card">
                            <div>
                                <h1>Planet Name: <strong>{ship.name}</strong></h1>
                            </div>
                            <div>
                                <p>Model: <strong>{ship.model}</strong></p>
                                <p>Starship Class: <strong>{ship.starship_class}</strong></p>
                                <p>Passengers: <strong>{ship.passengers}</strong></p>
                                <p>Cargo Capacity: <strong>{ship.cargo_capacity}</strong></p>
                                <p>Crew: <strong>{ship.crew}</strong></p>
                                <p>Length: <strong>{ship.length}</strong></p>
                                <p>Manufacturer: <strong>{ship.manufacturer}</strong></p>
                                <p>Cost in credits: <strong>{ship.cost_in_credits}</strong></p>
                            </div>
                        </div>
                    </div> }
                { error && <div>{error}</div>}
            <div className="go-back-btn-box">
                <Link to="/spaceships" className="go-back-btn">Go Back</Link>
            </div>
        </div>
     );
}
 
export default SpaceshipDetail;