import React, { Component } from "react";
import apiHotel from "../api/apiHotel";
import axios from "axios";

class Data extends Component {
  state = {
    hotels: [],
  };

  componentDidMount() {
    apiHotel.getHotelInfo().then((data) => {
      const hotels = data.filter((d) => d !== null);
      this.setState({ hotels: hotels });
      axios
        .post("http://localhost:4000/hotelData/data", { hotels })
        .then((DbRes) => console.log(DbRes))
        .catch((error) => console.log(error));
    });
  }
  render() {
    console.log(this.state.hotels);
    return (
      <div>
        <p>Data</p>
      </div>
    );
  }
}

export default Data;
