import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserContext from "../components/Auth/UserContext";
import apiHotel from "../api/apiHotel"; // needed for dayClick
import Loader from "react-loader-spinner";
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      hotels: [],
    };
  }
  static contextType = UserContext;
  componentDidMount() {
    console.log(this.context);
    if (this.context.user) {
      apiHotel.getHotelInfo(this.context.user.competitors).then((data) => {
        const hotels = data.filter((d) => d !== null);
        this.setState({ hotels: hotels });
      });
    }
  }

  getHotelName = (url) => {
    let res = url.substring(64);
    let name = res.substring(0, res.length - 5);
    if (name.charAt(0) === "-") {
      name = name.replace("-", "");
    }
    const regex = /_/gi;
    name = name.replace(regex, " ");
    return name;
  };

  render() {
    let names = this.state.hotels.map((oneHotel) =>
      this.getHotelName(oneHotel.hotel_url[0])
    );
    names = [...new Set(names)];

    let nameHotels = names.map((nameHotel) => {
      return <li key={nameHotel}>{nameHotel}</li>;
    });
    console.log(">>>", nameHotels);

    if (this.state.hotels.length === 0)
      return (
        <div
          className="loader"
          style={{ marginLeft: "auto", marginRight: "auto" }}
        >
          <Loader
            type="Bars"
            color="rgba(252, 192, 82, 0.932)"
            height={100}
            width={100}
          />
        </div>
      );
    return (
      <div>
        <div className="cardo">
          <h1>Hello {this.context.user.firstName}</h1>
          <h3>{this.context.user.lastName}</h3>
          <p className="title">{this.context.user.hotelName}</p>
          <p>{this.context.user.email}</p>
          <p>{this.context.user.phoneNumber}</p>
          <h3>Competitors :</h3>
          <p>{nameHotels}</p>

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
