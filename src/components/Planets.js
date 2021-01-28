import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PlanetGrid from './PlanetGrid';
import Pagination from './Pagination';
import Search from './Search';
import Spinner from './Spinner';

const Planets = () => {
    const [planets, setPlanets] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [query, setQuery] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [planetsPerPage] = useState(4)
    

    useEffect(() => {
        const fetchPlanets = async () => {
            const result = await axios(`https://swapi.dev/api/planets/?search=${query}`)

            setPlanets(result.data.results)
            setIsLoading(false)
        }

        fetchPlanets()
    }, [query])

    // Get current ship
    const indexOfLastPlanet = currentPage * planetsPerPage;
    const indexOfFirstPlanet = indexOfLastPlanet - planetsPerPage;
    const currentPlanets = planets.slice(indexOfFirstPlanet, indexOfLastPlanet);

    // Change Page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return isLoading ? (
        <div className="container">
            <Spinner />
        </div>
    ) : ( 
        <div className="container">
            <h1>Star Wars Planets</h1>
            <Search getQuery={(q) => setQuery(q)} />
            <div className="item-grid">
                {currentPlanets.map((planet, index) => (
                    <PlanetGrid key={index} planet={planet} id={index + 1}/>
                ))}
            </div>
            <Pagination 
                itemsPerPage={planetsPerPage} 
                totalItems={planets.length} 
                paginate={paginate} 
            />
        </div>
     );
}
 
export default Planets;