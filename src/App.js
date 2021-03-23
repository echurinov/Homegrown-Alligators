import React from "react";
import "./App.css";
import About from "./About";
import Members from "./members";
import Projects from "./projects";
import Contact from "./Contact";
import Header from "./components/header";
import Home from "./home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/members" component={Members} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
