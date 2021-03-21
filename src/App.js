import React from 'react';
import './App.css';
import About from './About';
import Members from './members';
import Projects from './projects';
import Contact from './Contact';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Contact}/>
        <Route path='/about' component={About}/>
        <Route path='/members' component={Members}/>
        <Route path='/projects' component={Projects}/>
      </Switch>
    </Router>
  );
}

export default App;
