import React, { Component } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import apiHotel from "../api/apiHotel"; // needed for dayClick
import bootstrapPlugin from "@fullcalendar/bootstrap";
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { withUser } from "../components/Auth/withUser";

class Calendar extends Component {
  state = {
    hotels: [],
    today: new Date(),
    modal: false,

    //isLoading: true,
  };

  componentDidMount() {
    if (this.props.context.user) {
      apiHotel.getHotelInfo(this.props.context.user.competitors).then((data) => {
        const hotels = data.filter((d) => d !== null);
        this.setState({ hotels: hotels });
      });
    }

    //this.setState({ idLoading: false });
    //console.log(hotels);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.context.user !== prevProps.context.user) {
      apiHotel.getHotelInfo(this.props.context.user.competitors).then((data) => {
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

  // handleEventClick = (eventInfo) => {
  //   this.setState({ modal: true })

  //    return
  // };

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

  render() {
    // const hotels = [{ name;"titi", age: 28}, {name: "toto", age: 14}];

    // hotels.map(hotel => hotel.name) => ["titi", "toto"]
    const hotel = this.state.hotels.flat().map((hotel) => {
      return {
        title: this.getHotelName(hotel.hotel_url[0]),
        description: hotel.rates[0].rate,
        date: hotel.chk_in,
      };
    });

    return (
      <div>
        {/* {(this.state.modal) ? <Modal /> : ""} */}

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

export default withUser(Calendar);
