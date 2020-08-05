import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserContext from "../components/Auth/UserContext";
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }
  static contextType = UserContext;
  componentDidMount() {
    console.log(this.context);
  }

  render() {
    if (this.context.user.firtName === null) return <div>Loading</div>;
    return (
      <div>
        <div className="cardo">
          <h1>Hello {this.context.user.firstName}</h1>
          <h3>{this.context.user.lastName}</h3>
          <p className="title">{this.context.user.hotelName}</p>
          <p>{this.context.user.email}</p>
          <p>{this.context.user.phoneNumber}</p>
          <h3>Competitors :</h3>
          <p>{this.context.user.competitors}</p>
          {/* <a href="#"><i className="fa fa-dribbble"></i></a>
  <a href="#"><i className="fa fa-twitter"></i></a>
  <a href="#"><i className="fa fa-linkedin"></i></a>
  <a href="#"><i className="fa fa-facebook"></i></a> */}
          <p>
            {" "}
            <Link className="link" to="/profile/settings">
              Edit profile
            </Link>
          </p>
        </div>
      </div>
    );
  }
}

export default Profile;
