import React, { Component } from "react";
import apiHotelDB from "../api/apiHotelDB";
import { Chart } from "react-google-charts";

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

  render() {
    let hotel = this.state.hotels.map((hotel) =>
      hotel.rates.map((rate) => {
        return {
          name: `${this.getHotelName(hotel.hotel_url[0])}`,
          name_site: rate.name,
          date: hotel.chk_in,
          rate: rate.rate,
        };
      })
    );

    if (hotel.length) {
      console.log("hotel", hotel[0][0].date, "au premier render");
    }

    return (
      <div>
        {this.state.hotels.map((oneHotel) => (
          <li key={oneHotel._id}> {this.getHotelName(oneHotel.hotel_url[0])}</li>
        ))}
        <div style={{ display: "flex", maxWidth: 900 }}>
          <Chart
            width={400}
            height={300}
            chartType="ColumnChart"
            loader={<div>Loading Chart</div>}
            data={[
              ["Date", "IBIS", "Mercury"],
              ['"2020-08-08"', 95, 86],
              ["", 3792000, 3694000],
              ["Chicago, IL", 2695000, 2896000],
              ["Houston, TX", 2099000, 1953000],
              ["Philadelphia, PA", 1526000, 1517000],
            ]}
            options={{
              title: "Population of Largest U.S. Cities",
              chartArea: { width: "30%" },
              hAxis: {
                title: "Total Population",
                minValue: 0,
              },
              vAxis: {
                title: "City",
              },
            }}
            legendToggle
          />
          <Chart
            width={400}
            height={"300px"}
            chartType="AreaChart"
            loader={<div>Loading Chart</div>}
            data={[
              ["Year", "Sales", "Expenses"],
              ["2013", 1000, 400],
              ["2014", 1170, 460],
              ["2015", 660, 1120],
              ["2016", 1030, 540],
            ]}
            options={{
              title: "Company Performance",
              hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
              vAxis: { minValue: 0 },
              // For the legend to fit, we make the chart area smaller
              chartArea: { width: "50%", height: "70%" },
              // lineWidth: 25
            }}
          />
        </div>
      </div>
    );
  }
}

export default Database;
