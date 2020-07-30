import React, { Component } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick

class Calendar extends Component {
  render() {
    return (
      <div>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          firstDay={1}
          events={[
            { title: `Your Hotel: ${"€"}`, date: "2020-07-30" },
            { title: `Competitor 1: ${"€"}`, date: "2020-07-30" },
            { title: `Competitor 2: ${"€"}`, date: "2020-07-30" },
            { title: `Competitor 3: ${"€"}`, date: "2020-07-30" },
          ]}
        />
      </div>
    );
  }
}

export default Calendar;
