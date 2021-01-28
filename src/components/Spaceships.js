import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ShipGrid from './ShipGrid';
import Pagination from './Pagination';
import Spinner from './Spinner';

const Spaceships = () => {
    const [ships, setShips] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const [shipsPerPage] = useState(4)
    
    useEffect(() => {
        const fetchShips = async () => {
            const result = await axios(`https://swapi.dev/api/starships`)

            console.log(result.data)

            setShips(result.data.results)
            setIsLoading(false)
            
        }

        fetchShips()
    }, [])

    // Get current ships
    const indexOfLastShip = currentPage * shipsPerPage;
    const indexOfFirstShip = indexOfLastShip - shipsPerPage;
    const currentShips = ships.slice(indexOfFirstShip, indexOfLastShip);

    // Change Page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return isLoading ? (
        <div className="container">
            <Spinner />
        </div>
    ) : ( 
        <div className="container">
            <h1>Star War Ships</h1>
            <div className="item-grid">
                {currentShips.map((ship, index) => (
                    <ShipGrid key={index} ship={ship} id={index + 1}/>
                ))}
            </div>
            <Pagination 
                itemsPerPage={shipsPerPage} 
                totalItems={ships.length} 
                paginate={paginate} 
            />
        </div>
     );
}
 
export default Spaceships;