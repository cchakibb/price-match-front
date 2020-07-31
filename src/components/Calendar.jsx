import React, { Component } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import apiHotel from "../api/apiHotel"; // needed for dayClick

class Calendar extends Component {
  state = {
    hotels: [],
    today: new Date()
    //isLoading: true,
  };

  componentDidMount() {

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

// const hotels = [{ name;"titi", age: 28}, {name: "toto", age: 14}];
    console.log("dans le render",this.state.hotels)
     
   // hotels.map(hotel => hotel.name) => ["titi", "toto"]
const hotel=()=>{
    this.state.hotels.map((hotel) => {
    return hotel.chk_in
    })
}
    
 
  
    
    
    // const ["titi", "toto"] =<


    return (
      
      <div>
        
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridWeek"
          firstDay={1}
          events={[
            { title: ` ${"€"}`, date: `${hotel.chk_in}` },
      
          ]}
        />
      </div>
    );
  }
}

export default Calendar;
