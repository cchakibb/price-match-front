import React, { Component } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { ThirdPartyDraggable } from "@fullcalendar/interaction";
import apiHotel from "../api/apiHotel"; // needed for dayClick
import bootstrapPlugin from "@fullcalendar/bootstrap";
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { withUser } from "../components/Auth/withUser";
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
    isLoading: true,

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

  handleEventClick = (eventInfo, el) => {
    this.setState({ modal: !this.state.modal });
    this.setState({ date: eventInfo.event.date });
    this.setState({ title: eventInfo.event.title });
    this.setState({ description: eventInfo.event.extendedProps.description });

    console.log("this state event date", this.state.date);
    console.log("this state event", eventInfo);
  };

  isLoading = () => {};

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
        <div style={{ height: "auto", width: "", margin: "100px 100px" }}>
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin, bootstrapPlugin]}
            initialView="dayGridWeek"
            firstDay={1}
            height="auto"
            timeZone="UTC"
            selectable="true"
            loading={this.isLoading}
            eventClick={this.handleEventClick}
            eventContent={this.EventDetail}
            events={hotel}
          />
        </div>
        <div>
          <Modal isOpen={this.state.modal} handleClose={this.closeModal} title={this.state.title} description={this.state.description} date={this.state.date} />
        </div>
      </div>
    );
  }
}

export default withUser(Calendar);
