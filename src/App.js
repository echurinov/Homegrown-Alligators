import React from 'react';
import './App.css';
import Navbar from './components/NavBar.js';
import Social from './components/Social.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Social />
      <Navbar /> 
      <Switch>
        <Route path='/' exact />
      </Switch>
      </Router>
    </>
  );
}

export default App;