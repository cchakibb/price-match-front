import React, { Component, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, {
  ThirdPartyDraggable,
} from "@fullcalendar/interaction";
import apiHotel from "../api/apiHotel"; // needed for dayClick
import bootstrapPlugin from "@fullcalendar/bootstrap";
import Modal from "./Modal";

class Calendar extends Component {
  state = {
    hotels: [],
    today: new Date(),
    modal: false,
    event: {
      title: "",
      description: "",
      date: new Date(),
    },

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

  getHotelName = (url) => {
    console.log("url", url);
    let res = url.substring(64);
    let name = res.substring(0, res.length - 5);
    if (name.charAt(0) === "-") {
      name = name.replace("-", "");
    }
    const regex = /_/gi;
    name = name.replace(regex, " ");
    return name;
  };

  handleEventClick = (eventInfo, el) => {
    this.setState({ modal: !this.state.modal });
    this.setState({ event: eventInfo.event });

    console.log(eventInfo);
  };

  EventDetail = (eventInfo) => {
    return (
      <>
        <p>{eventInfo.event.title}</p>

        <p
          style={{
            textAlign: "center",
            backgroundColor: "white",
            color: "black",
          }}
        >
          {eventInfo.event.extendedProps.description}
        </p>
      </>
    );
  };

  closeModal = () => {
    this.setState({ modal: false });
  };

  render() {
    // const hotels = [{ name;"titi", age: 28}, {name: "toto", age: 14}];
    console.log("dans le render", this.state.hotels.flat());

    // hotels.map(hotel => hotel.name) => ["titi", "toto"]
    const hotel = this.state.hotels.flat().map((hotel) => {
      return {
        title: this.getHotelName(hotel.hotel_url[0]),
        description: hotel.rates[0].rate,
        date: hotel.chk_in,
      };
    });
    console.log("events", hotel);

    return (
      <div>
        <Modal
          isOpen={this.state.modal}
          handleClose={this.closeModal}
          event={this.state.event}
        />

        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin, bootstrapPlugin]}
          initialView="dayGridWeek"
          firstDay={1}
          timeZone="UTC"
          themeSystem="bootstrap"
          selectable="true"
          eventClick={this.handleEventClick}
          eventContent={this.EventDetail}
          events={hotel}
        />
      </div>
    );
  }
}

export default Calendar;
