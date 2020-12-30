import React, { Component } from "react";
//import EmployeeService from "../services/EmployeeService";
import axios from "axios";
const GET_URL = "http://localhost:8080/api/v1/employees";

export default class ListEmployeeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employeeList: [],
    };
  }
  componentDidMount() {
    // EmployeeService.getEmployees.then((res) => {
    //     this.setState({ employeeList : res.data});
    // });
    axios.get(GET_URL).then((res) => {
      this.setState({ employeeList: res.data });
    });
  }

  handleAdd = () =>{
  this.props.history.push("add-employee");
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Employee List</h2>
        <div className="row">
          <button className="btn btn-primary" onClick={this.handleAdd}>Add Employee</button>
        </div>
        <br></br>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Employee FirstName</th>
                <th>Employee LastName</th>
                <th>Employee EmailId</th>
                <th>Employee Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.employeeList.map((emp) => {
                return (
                  <tr key={emp.id}>
                    <td>{emp.firstName}</td>
                    <td>{emp.lastName}</td>
                    <td>{emp.emailId}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
