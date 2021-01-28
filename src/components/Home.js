import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PlanetGrid from './PlanetGrid';
import ShipGrid from './ShipGrid';
import { Link } from 'react-router-dom';
import Spinner from './Spinner';

const Home = () => {
    const [ships, setShips] = useState([])
    const [planets,setPlanets] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        const fetchShips = async () => {
            const ship_result = await axios('https://swapi.dev/api/starships/')
            const planet_result = await axios('https://swapi.dev/api/planets')

            setShips(ship_result.data.results)
            setPlanets(planet_result.data.results)
            setIsLoading(false)
            
        }

        fetchShips()
    }, [])


    return isLoading ? (
        <div className="container">
            <Spinner />
        </div>
    ) : ( 
        <div className="container">
            <h1>Star Wars Planets</h1>
            <div className="item-grid">
                {planets.slice(0, 3).map((planet, index) => (
                    <PlanetGrid key={index} planet={planet} id={index + 1}/>
                ))}
            </div>
            <div className="home-link-box">
                <Link to="/planets" >See More</Link>
            </div>

            <h1>Star War Ships</h1>
            <div className="item-grid">
                {ships.slice(0, 3).map((ship, index) => (
                    <ShipGrid key={index} ship={ship} id={index + 1}/>
                ))}
            </div>
            <div className="home-link-box">
                <Link to="/spaceships" >See More</Link>
            </div>
        </div>
     );
}
 
export default Home;