import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useSingleFetch from '../useSingleFetch';
import Spinner from './Spinner';

const PlanetDetail = () => {
    const { id } = useParams();

    const { data: planet, error, isLoading } = useSingleFetch('https://swapi.dev/api/planets/'+id);


    return isLoading ? (
        <div className="container">
            <Spinner />
        </div>
    ): ( 
        <div className="container">
            <div className="detail-card">
                <div>
                    <h1>Planet Name: <strong>{planet.name}</strong></h1>
                </div>
                <div>
                    <p>Climate: <strong>{planet.climate}</strong></p>
                    <p>Diameter: <strong>{planet.diameter}</strong></p>
                    <p>Gravity: <strong>{planet.gravity}</strong></p>
                    <p>Orbital Period: <strong>{planet.orbital_period}</strong></p>
                    <p>Rotation Period: <strong>{planet.rotation_period}</strong></p>
                    <p>Surface Water: <strong>{planet.surface_water}</strong></p>
                    <p>Terrain: <strong>{planet.terrain}</strong></p>
                    <p>Population: <strong>{planet.population}</strong></p>
                </div>
            </div>
            { error && <div>{error}</div>}
            <div className="go-back-btn-box">
                <Link to="/planets" className="go-back-btn">Go Back</Link>
            </div>
        </div>
     );
}
 
export default PlanetDetail;