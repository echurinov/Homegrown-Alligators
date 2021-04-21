import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import PageTitle from "../components/pageTitle";
import space3 from "../components/Images/space3.png";
import '../index.css';
import "./projects.css";
import ProjectCard from "../components/projectCard";
import axios from 'axios';

export default class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       projects: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8082/api/project/')
      .then(res => {
        //console.log("Print-showMembers-API-response: " + res.data.length)
        const projects = res.data;
        this.setState({projects: projects})
      })
      .catch(err =>{
        console.log('Error from projects.js');
      })
  };

  render() {

    const projects = this.state.projects;
    //console.log("Print Members: " + members);
    let projectList;

    if(!projects) {
      projectList = "There is no project record!";
    } else {
      projectList = projects.map((project, k) =>
        <ProjectCard project={project} key={k} />
      );
    }
    
    return (
      <div className="page">
        <Header />

        <div className="title-wrapper">
          <img src={space3}></img>
          <PageTitle text="PROJECTS" />
        </div>

        <div className="list">
          {projectList}
        </div>

        <Footer />
      </div>
    );
  }
}
