import React, { Component } from "react";
import apiHotel from "../api/apiHotel";
import axios from "axios";
import { withUser } from "../components/Auth/withUser";
import UserContext from "../components/Auth/UserContext";

class Data extends Component {
  state = {
    hotels: [],
  };

  componentDidMount() {
    if (this.props.context.user) {
      apiHotel
        .getHotelInfo(this.props.context.user.competitors)
        .then((data) => {
          const hotels = data.filter((d) => d !== null);
          this.setState({ hotels: hotels });
          axios
            .post("http://localhost:4000/hotelData/data", { hotels })
            .then((DbRes) => console.log(DbRes))
            .catch((error) => console.log(error));
        });
    }
  }

  componentDidUpdate(prevProps) {
    console.log(this.props.context, "this is context");
  }

  render() {
    if (this.state.hotels) {
      console.log("hotels", this.state.hotels);
      return (
        <div>
          <p>Data</p>
        </div>
      );
    } else {
      return "Loading...";
    }
  }
}

export default withUser(Data);
