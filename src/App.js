import React from "react";
import "./App.css";
import home from "./Pages/home";
import About from "./Pages/About";
import Members from "./Pages/members";
import Projects from "./Pages/projects";
import Contact from "./Pages/Contact";
import AdminLogin from "./Pages/AdminLogin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={home} />
        <Route path="/about" component={About} />
        <Route path="/about" component={About} />
        <Route path="/members" component={Members} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route path="/admin" component={AdminLogin} />
      </Switch>
    </Router>
  );
}

export default App;
