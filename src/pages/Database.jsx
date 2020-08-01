import React, { Component } from 'react'
import apiHotelDB from '../api/apiHotelDB'

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
    render() {
        return (
            <div>
                {this.state.hotels.map((oneHotel) => (

                    <li key={oneHotel._id} > {oneHotel.hotel_url[0]}</li>
                    ))}
            </div>
        )
    }
}

export default Database
