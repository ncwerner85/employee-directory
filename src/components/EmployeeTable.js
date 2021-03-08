import React, { Component } from "react";
import API from "../utils/API";
import SearchBar from "./SearchBar";

export default class EmployeeTable extends Component {
  state = {
    employees: [],
    filteredEmployees: [],
    search: "",
  };
  componentDidMount() {
    this.loadGetEmployees();
  }
  loadGetEmployees = () => {
    API.getEmployees()
      .then((res) => {
        console.log(res.data.results);
        this.setState({
          employees: res.data.results,
          filteredEmployees: res.data.results,
        });
      })
      .catch((err) => console.log(err));
  };
  handleInputChange = (event) => {
    this.setState({ search: event.target.value });
    //filter through this.state.employees google array filters js then set state of filtered employees to new filtered employees
  };
  render() {
    return (
      <div>
        <SearchBar handleInputChange={this.handleInputChange} />
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Email</th>
              <th scope="col">Date of Birth</th>
            </tr>
          </thead>
          <tbody>
            {this.state.filteredEmployees.map((employee) => (
              <tr key={employee.login.uuid}>
                <td>
                  <img src={employee.picture.thumbnail} alt="profile pic" />
                </td>
                <td>
                  {employee.name.first} {employee.name.last}
                </td>
                <td>{employee.phone}</td>
                <td>{employee.email}</td>
                <td>{employee.dob.date.substring(0, 10)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
//sort is on and onClick