import React, { Component } from "react";
import apiHotelDB from "../api/apiHotelDB";

export class Database extends Component {
  state = {
    hotels: [],
  };

  componentDidMount() {
    apiHotelDB
      .getAllHotels()
      .then((apiRes) => {
        console.log(apiRes.data);
        this.setState({ hotels: apiRes.data });
      })
      .catch((err) => console.log(err));
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
    return (
      <div>
        {this.state.hotels.map((oneHotel) => (
          <li key={oneHotel._id}> {this.getHotelName(oneHotel.hotel_url[0])}</li>
        ))}
      </div>
    );
  }
}

export default Database;
