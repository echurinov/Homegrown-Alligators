import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import PageTitle from "../components/pageTitle";
import space3 from "../components/Images/space3.png";
import '../index.css';
import "./projects.css";

const testInfoShort =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
const testInfoLong =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

class Project extends React.Component
{
  constructor(props)
  {
    super(props);

    this.state = {
      title:this.props.title,
      description:this.props.description
    }
  }
}

const projects = [
  <Project title="Project 1" description={testInfoShort}/>,
  <Project title="Project 2" description={testInfoShort}/>,
  <Project title="Project 3" description={testInfoShort}/>,
  <Project title="Project 4" description={testInfoShort}/>,
  <Project title="Project 5" description={testInfoShort}/>,
  <Project title="Project 6" description={testInfoShort}/>,
  <Project title="Project 7" description={testInfoShort}/>,
  <Project title="Project 8" description={testInfoShort}/>,
  <Project title="Project 9" description={testInfoShort}/>,
  <Project title="Project 10" description={testInfoLong}/>,
];

class ProjectBox extends React.Component {
  render() {
    return (
      <div className="project-box">
        <div className="project-title">
          <h2>{this.props.title}</h2>
        </div>
        <ul className="project-content">
          <li className="project-image">
            <img src={this.props.imgPath} alt="" />
          </li>
          <li className="project-data">
            <div className="project-info">
              <text>{this.props.info}</text>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default class Projects extends React.Component {
  renderProjects()
  {
    let projectBoxes = [];

    for(var i = 0; i < projects.length; i++)
    {
      projectBoxes.push(
        <ProjectBox
          title={projects[i].props.title}
          info={projects[i].props.description}
          imgPath="gators.png"
        />
      );
    }

    return projectBoxes;
  }

  render() {
    return (
      <div className="page">
        <Header />

        <div className="title-wrapper">
          <img src={space3}></img>
          <PageTitle text="PROJECTS" />
        </div>

        {this.renderProjects()}

        <Footer />
      </div>
    );
  }
}
