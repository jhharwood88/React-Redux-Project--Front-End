import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import ShiftsContainer from './containers/ShiftsContainer'


function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/shifts" component={ShiftsContainer} />
      </div>
    </Router>
  );
}

export default App;
