import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import UserContext from "../components/Auth/UserContext";
import apiHandler from "../api/apiHandler";
import MultiSelect from "@khanacademy/react-multi-select";

const options = [
  { label: "Hotel Marguerite", value: "g187129-d615325" },
  { label: "Hotel Campanile Gare", value: "g187129-d229787" },
  { label: "Hotel des Cedres", value: "g187129-d572198" },
  { label: "Hotel Ibis Gare", value: "g187129-d233286" },
  { label: "Grand Hotel", value: "g187129-d243818" },
  { label: "Hotel Saint Aignan", value: "g187129-d636351" },
  { label: "Appart City", value: "g187129-d5217993" },
  { label: "Escale Oceania", value: "g187129-d261850" },
  { label: "Hotel Abeille", value: "g187129-d1119754" },
];

class FormUpdate extends Component {
  static contextType = UserContext;

  handleChange = (event) => {
    const value = event.target.type === "file" ? event.target.files[0] : event.target.type === "checkbox" ? event.target.checked : event.target.value;

    const key = event.target.name;

    this.setState({ [key]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    apiHandler
      .UserUpdate(this.state)
      .then((data) => {
        this.context.setUser(data);
        this.props.history.push("/profile");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    // const { competitors } = this.state;
    console.log(this.context.user.competitors);
    return (
      <div className="register-wrapper">
        <div className="register-block">
          <h3 className="register-title">Update your account</h3>
          <form
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              width: 300,
              marginLeft: 600,
            }}
          >
            <label>First name:</label>
            <input type="text" id="firstName" name="firstName" defaultValue={this.context.user.firstName} />
            <label>Last name:</label>
            <input type="text" id="lastName" name="lastName" defaultValue={this.context.user.lastName} />
            <label>Hotel name:</label>
            <input type="text" id="hotelName" name="hotelName" defaultValue={this.context.user.hotelName} />
            <label>Phone number:</label>
            <input type="text" id="phoneNumber" name="phoneNumber" defaultValue={this.context.user.phoneNumber} />
            <label>Address:</label>
            <input type="text" id="address" name="address" defaultValue={this.context.user.address} />
            <label>Competitors:</label>
            <MultiSelect
              options={options}
              selected={this.context.user.competitors}
              onSelectedChanged={(competitors) => {
                this.setState({ competitors });
                this.context.setUser({ competitors });
              }}
            />
            {/* <MultiSelect options={options} selected={competitors} onSelectedChanged={(competitors) => this.setState({ competitors })} /> */}

            <button>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}
export default withRouter(FormUpdate);
