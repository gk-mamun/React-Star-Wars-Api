import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/"><h1>SWAPI</h1></Link>
            </div>
            <div className="navbar-menu">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/planets">Planets</Link></li>
                    <li><Link to="/spaceships">Spaceships</Link></li>
                </ul>
            </div>
        </nav>
     );
}
 
export default Navbar;