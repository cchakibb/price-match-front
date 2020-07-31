import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import UserContext from "../components/Auth/UserContext"
import apiHandler from "../api/apiHandler";


class FormUpdate extends Component {
  static contextType = UserContext;


  handleChange = (event) => {
    const value = event.target.value;
    const key = event.target.name;
    this.setState({ [key]: value });
    console.log(value)
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state)
      apiHandler
        .UserUpdate(this.state)
        .then((data) => {
          this.context.setUser(data);
          this.props.history.push("/profile");
          console.log(this.props.history)
        })
        .catch((error) => {
          console.log(error);
        });
    }

  render() {

    return (
      <div className="register-wrapper">
      <div className="register-block">
        <h3 className="register-title">Create a account</h3>
        <form onChange={this.handleChange} onSubmit={this.handleSubmit} style={{ display: "flex", flexDirection: "column", width: 300, marginLeft: 600 }}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
          <label htmlFor="password1">Password:</label>
          <input type="password" id="password1" name="password1" />
          <label htmlFor="password2">Confirm password:</label>
          <input type="password" id="password2" name="password2" />
          <label>First name:</label>
          <input type="text" id="firstName" name="firstName"  />
          <label>Last name:</label>
          <input type="text" id="lastName" name="lastName" />
          <label>Hotel name:</label>
          <input type="text" id="hotelName" name="hotelName" />
          <label>Phone number:</label>
          <input type="text" id="phoneNumber" name="phoneNumber" />
          <label>Address:</label>
          <input type="text" id="address" name="address" />
          <label>Competitors:</label>
          <input type="text" id="competitors" name="competitors" />

          <button>Submit</button>
        </form>
        </div>
        </div>
      
    );
  }

}
export default withRouter(FormUpdate);
