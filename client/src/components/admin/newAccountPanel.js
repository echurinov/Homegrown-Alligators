import React, { useState } from "react";
import "./newAccountPanel.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import "./loginForm.css";
const eye = <FontAwesomeIcon icon={faEye} />;

export default class NewAccountPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "Input Account Email...",
      password: "Input Secure Password...",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();

    const account = {
      email: this.state.email,
      password: this.state.password,
    };

    const req = axios
      .post("http://localhost:8082/api/account/add", account)
      .then((res) => {
        this.setState({
          email: "",
          password: "",
        });
        //this.props.history.push('/admin');
      })
      .catch((err) => {
        console.log("Error in NewAccountPanel!");
      });

    req.then(this.props.updateAccountList);
  }

  render() {
    return (
      <div className="new-account-panel">
        <div className="new-account-panel-header">
          <h1>Add New Account</h1>
        </div>
        <div className="new-account-form">
          <form onSubmit={this.handleSubmit}>
            <div className="input-text">
              <div htmlFor="email">Email</div>
              <input
                className="form-control"
                type="text"
                id="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>

            <div className="input-text">
              <div htmlFor="password">Password</div>
              <input
                className="form-control"
                type="text"
                id="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>
            <input type="submit" value="Add Account" />
          </form>
        </div>
      </div>
    );
  }
}
