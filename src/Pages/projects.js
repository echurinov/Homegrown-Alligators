import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import PageTitle from "../components/pageTitle";
import space3 from "../components/Images/space3.png";
import "./projects.css";

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

class ProjectBoxList extends React.Component {
  render() {
    return (
      <div className="project-box-list">
        <div>{this.props.boxes[0]}</div>
        <div>{this.props.boxes[1]}</div>
        <div>{this.props.boxes[2]}</div>
        <div>{this.props.boxes[3]}</div>
        <div>{this.props.boxes[4]}</div>
        <div>{this.props.boxes[5]}</div>
        <div>{this.props.boxes[6]}</div>
        <div>{this.props.boxes[7]}</div>
        <div>{this.props.boxes[8]}</div>
        <div>{this.props.boxes[9]}</div>
      </div>
    );
  }
}

export default class Projects extends React.Component {
  render() {
    var testInfoShort =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    var testInfoLong =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

    var projectBoxes = [
      <ProjectBox
        imgPath="gators.png"
        title="Project 1"
        info={testInfoShort}
      />,
      <ProjectBox imgPath="gators.png" title="Project 2" info={testInfoLong} />,
      <ProjectBox
        imgPath="gators.png"
        title="Project 3"
        info={testInfoShort}
      />,
      <ProjectBox
        imgPath="gators.png"
        title="Project 4"
        info={testInfoShort}
      />,
      <ProjectBox
        imgPath="gators.png"
        title="Project 5"
        info={testInfoShort}
      />,
      <ProjectBox imgPath="gators.png" title="Project 6" info={testInfoLong} />,
      <ProjectBox
        imgPath="gators.png"
        title="Project 7"
        info={testInfoShort}
      />,
      <ProjectBox
        imgPath="gators.png"
        title="Project 8"
        info={testInfoShort}
      />,
      <ProjectBox
        imgPath="gators.png"
        title="Project 9"
        info={testInfoShort}
      />,
      <ProjectBox
        imgPath="gators.png"
        title="Project 10"
        info={testInfoLong}
      />,
    ];

    return (
      <div className="page">
        <Header />

        <div className="title-wrapper">
          <img src={space3}></img>
          <PageTitle text="PROJECTS" />
        </div>

        <div>
          <ProjectBoxList boxes={projectBoxes} />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}
