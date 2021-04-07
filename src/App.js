import React from "react";
import "./App.css";
import Header from "./components/header";
import home from "./components/home";
import About from "./components/About";
import Members from "./components/members";
import Projects from "./components/projects";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={home} />
        <Route path="/about" component={About} />
        <Route path="/about" component={About} />
        <Route path="/members" component={Members} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
