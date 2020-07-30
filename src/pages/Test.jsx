import React, { Component } from "react";
import apiHotel from "../api/apiHotel";

export class test extends Component {
  state = {
    hotels: [],
  };

  componentDidMount() {
    // apiHotel.getHotelsInfo().then((debRes) => {
    // this.setState({ hotels: debRes.data });
    // console.log(debRes.data);
    //});
    apiHotel.getHotelInfo().then((hotels) => this.setState({ hotels }));
  }

    render() {
      
    return (
      <div>
            <h3>Prices</h3>
            <p>{this.state.hotels[0].rates}</p>
      </div>
    );
  }
}

export default test;
