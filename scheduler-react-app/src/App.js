import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import ShiftsContainer from './containers/ShiftsContainer'
import ShowShifts from './components/ShowShifts'


function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/shifts" component={ShiftsContainer} />
        <Route path="/shifts/:id" component={ShowShifts}/>
      </div>
    </Router>
  );
}

export default App;
