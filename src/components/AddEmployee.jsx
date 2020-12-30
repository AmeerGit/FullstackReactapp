import React, { Component } from "react";
import axios from "axios";
const GET_URL = "http://localhost:8080/api/v1/employees";

export default class AddEmployee extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      emailId: "",
    };
  }

  submit = (e) => {
    e.preventDefault();
    let employee = {
      id: 7,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      emailId: this.state.emailId,
    };
    let data = JSON.stringify(employee);
    axios
      .post(GET_URL, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        this.props.history.push("/employees");
      });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="textcenter">Add Employee</h3>
            <div className="card-body">
              <div className="form-group">
                <label>First Name:</label>
                <input
                  className="form-control"
                  value={this.state.firstName}
                  onChange={(e) => {
                    this.setState({ firstName: e.target.value });
                  }}
                />
              </div>
              <div className="form-group">
                <label>Last Name:</label>
                <input
                  className="form-control"
                  value={this.state.lastName}
                  onChange={(e) => {
                    this.setState({ lastName: e.target.value });
                  }}
                />
              </div>
              <div className="form-group">
                <label>Email Id:</label>
                <input
                  type="email"
                  className="form-control"
                  value={this.state.emailId}
                  onChange={(e) => {
                    this.setState({ emailId: e.target.value });
                  }}
                />
              </div>
              <button
                type="submit"
                className="btn btn-success"
                onClick={this.submit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
