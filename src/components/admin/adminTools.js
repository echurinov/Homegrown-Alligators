import React from "react";
import AdminCalendarTool from "./adminCalendarTool";
import AdminMembersTool from "./adminMembersTool";
import AdminProjectsTool from "./adminProjectsTool";
import AdminAccountsTool from "./adminAccountsTool";
import "./adminTools.css";

class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      headerText: this.props.headerText,
      contents: this.props.contents,
    };
  }

  toggleList = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    return (
      <div className="dropdown">
        <button
          type="button"
          className="dropdown-button"
          onClick={this.toggleList}
        >
          <p>{this.state.headerText}</p>
        </button>
        {this.state.isOpen && this.state.contents}
      </div>
    );
  }
}

export default class AdminTools extends React.Component {
  render() {
    return (
      <div className="admin-tools">
        <div className="admin-tools-header">
          <h1>Admin Tools</h1>
        </div>
        <Dropdown headerText="Calendar Tool" contents={<AdminCalendarTool />} />
        <Dropdown headerText="Members Tool" contents={<AdminMembersTool />} />
        <Dropdown headerText="Projects Tool" contents={<AdminProjectsTool />} />
      </div>
    );
  }
}
