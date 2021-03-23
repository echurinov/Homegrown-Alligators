import React from 'react';
import './App.css';
import home from './home';
import About from './About';
import Members from './members';
import Projects from './projects';
import Contact from './Contact';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={home}/>
        <Route path='/about' component={About}/>
        <Route path='/about' component={About}/>
        <Route path='/members' component={Members}/>
        <Route path='/projects' component={Projects}/>
        <Route path='/contact' component={Contact}/>
      </Switch>
    </Router>
  );
}

export default App;
