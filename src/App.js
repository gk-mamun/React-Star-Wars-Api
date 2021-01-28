import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Planets from './components/Planets';
import Spaceships from './components/Spaceships';
import PlanetDetail from './components/PlanetDetail';
import SpaceshipDetail from './components/SpaceshipDetail';
import NotFound from './components/NotFound';
import './App.css';

const  App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
              <Home />
          </Route>
          <Route exact path="/planets">
              <Planets />
          </Route>
          <Route path="/planets/:id">
              <PlanetDetail />
          </Route>
          <Route exact path="/spaceships">
              <Spaceships />
          </Route>
          <Route path="/spaceships/:id">
              <SpaceshipDetail />
          </Route>
          <Route path="*">
              <NotFound />
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
