import React, { Component } from "react";
import apiHotel from "../api/apiHotel";


export class test extends Component {
  state = {
    hotels: [],
    //isLoading: true,
  };

  componentDidMount() {
    // apiHotel.getHotelsInfo().then((debRes) => {
    // this.setState({ hotels: debRes.data });
    // console.log(debRes.data);
    //});
    apiHotel.getHotelInfo().then((data) => {
      const hotels = data.filter((d) => d !== null);
      this.setState({ hotels: hotels });
    });
    //this.setState({ idLoading: false });
    //console.log(hotels);
  }
    
  getHotelName = (url) =>{
    let res = url.substring(64);
    let name = res.substring(0, res.length - 5);
    if (name.charAt(0) === "-") {
      name = name.replace("-", "");
    }
    const regex = /_/gi;
    name = name.replace(regex, " ");
    return (name) ;
  }

  render() {
      console.log(this.state.hotels);
      
    

    // {
    //     chk_in: "2020-09-20",
    //     chk_out: "2020-09-23",
    //     currency: "USD",
    //     rates: [
    //     {
    //     code: "HotelsCom2",
    //     name: "Hotels.com",
    //     rate: 96,
    //     tax: 18
   

    if (this.state.hotels.length > 0) {
      return (
        <div>
          <h3>Prices</h3>
              {this.state.hotels.map((hotel, i) => {
            
              return <div key={i}>{this.getHotelName(hotel.hotel_url[0])}
                  
                  {hotel.rates.map((rate, i) => {

                    return <p key={i}>{hotel.chk_in}{rate.name} <br/>{rate.rate}</p>

                  }
                  )} 

              </div>
            // 
          })}
        </div>
      );
    } else {
      return "Loading";
    }
  }
}

export default test;
