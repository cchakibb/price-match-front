import React, { Component } from "react";
import apiHandler from "../api/apiHandler";
import { Link } from "react-router-dom";
import UserContext from "../components/Auth/UserContext"
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    }; 

    
}
  static contextType = UserContext;
  componentDidMount() {
    console.log(this.context)
  }

  render(){

    if (this.context.user.firtName === null) return <div>Loading</div>
    return (
      <div className="profile">
      <div>

        <h1>Hello {this.context.user.firstName}</h1>
        <p>{this.context.user.lastName}</p>
        <p>{this.context.user.hotelName}</p>
        <p>{this.context.user.email}</p>
        <p>{this.context.user.phoneNumber}</p>
        <p>{this.context.user.competitors}</p>
      </div>
        <Link className="link" to="/profile/settings">
            Edit profile
          </Link>
      </div>
    );
    };
  }

export default Profile;
