import React from "react";
import "./App.css";
import home from "./Pages/home";
import About from "./Pages/About";
import Members from "./Pages/members";
import Projects from "./Pages/projects";
import Contact from "./Pages/Contact";
import CalendarPage from "./Pages/calendar";
import AdminLogin from "./Pages/AdminLogin";
import AdminCalendar from "./Pages/AdminCalendar";
import AdminMembers from "./Pages/AdminMembers";
import AdminProjects from "./Pages/AdminProjects";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={home} />
        <Route path="/about" component={About} />
        <Route path="/members" component={Members} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route path='/calendar' component={CalendarPage}/>
        <Route path="/admin" component={AdminLogin} />
        <Route path="/admin-calendar" component={AdminCalendar}/>
        <Route path="/admin-members" component={AdminMembers}/>
        <Route path="/admin-projects" component={AdminProjects}/>
      </Switch>
    </Router>
  );
}

export default App;
