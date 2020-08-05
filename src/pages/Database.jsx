import React, { Component } from "react";
import apiHotelDB from "../api/apiHotelDB";
import { Chart } from "react-google-charts";

export class Database extends Component {
  state = {
    hotels: [],
    dates : []
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

    // let hotel = this.state.hotels.map((hotel) =>
    //   hotel.rates.map((rate) => {
    //     return {
    //       name: `${this.getHotelName(hotel.hotel_url[0])}`,
    //       name_site: rate.name,
    //       date: hotel.chk_in,
    //       rate: rate.rate,
    //     };
    //   })
    // );

    // if (hotel.length) {
    //   console.log("hotel", hotel, "au premier render");
    // }

    const result = this.state.hotels.reduce((acc, curr) => {
      if (acc[curr.hotel_url[0]]) {
        acc[curr.hotel_url[0]].dates[curr.chk_in] = curr.rates[0].rate;
      } else {
        acc[curr.hotel_url[0]] = {
          dates: { [curr.chk_in]: curr.rates[0].rate },
        };
      }
      return acc;
    }, {});
    console.log(result)

    let dates = [];
const hotelNames = Object.keys(result);
hotelNames.forEach((hotelName) => {
  const datesInHotel = Object.keys(result[hotelName].dates);
  dates = [...dates, ...datesInHotel];
});
dates.sort();
dates = [...new Set(dates)];
const myData = dates.reduce((acc, curr) => {
  for (let hotelName of hotelNames) {
    if (acc[curr]) {
      acc[curr].push(result[hotelName].dates[curr]);
    } else {
      acc[curr] = [result[hotelName].dates[curr]];
    }
  }
  return acc;
}, {});
    
const formattedData = Object.keys(myData).reduce((acc, curr) => {
  acc.push([curr, ...myData[curr]]);
  return acc;
}, []);
    console.log("formattedData",formattedData)
console.log(hotelNames);
const formattedHotelsNames = hotelNames.map(hotel => this.getHotelName(hotel));
    const readyDataForChart = ["Dates", ...formattedHotelsNames];
    console.log("readyData",readyDataForChart)
    const data = formattedData.unshift(readyDataForChart);
    console.log("data",data)



    return (
      <div>
<<<<<<< HEAD
        {/* {this.state.hotels.map((oneHotel) => (
          <li key={oneHotel._id}>
            {" "}
            {this.getHotelName(oneHotel.hotel_url[0])}
          </li>
        ))} */}
=======
        {this.state.hotels.map((oneHotel) => (
          <li key={oneHotel._id}> {this.getHotelName(oneHotel.hotel_url[0])}</li>
        ))}
>>>>>>> b1144dbf1d23e53fd5a5791427e6bdc5d0c465a2
        <div style={{ display: "flex", maxWidth: 900 }}>
          <Chart
            width={1000}
            height={400}
            chartType="ColumnChart"
            loader={<div>Loading Chart</div>}
            data={formattedData}
            options={{
              title: "Rates per date",
              chartArea: { width: "30%" },
              hAxis: {
                title: "Dates",
                minValue: 0,
              },
              vAxis: {
                title: "Rates",
              },
            }}
            legendToggle
          />
          
          {/* <Chart
            width={400}
            height={"300px"}
            chartType="ColumnChart"
            loader={<div>Loading Chart</div>}
            data={formattedData}
            options={{
              title: "Company Performance",
              hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
              vAxis: { minValue: 0 },
              // For the legend to fit, we make the chart area smaller
              chartArea: { width: "50%", height: "70%" },
              // lineWidth: 25
            }}
            
          />
           <Chart
            width={400}
            height={"300px"}
            chartType="ColumnChart"
            loader={<div>Loading Chart</div>}
            data={[
              ["Hotel", "2020-08-01", "2020-08-02","2020-08-03","2020-08-04"],
              ["Hotel des Arts Montmartre", 95, null,105,110],
              ["Le Royal Monceau Raffles", 117, 120, 110, 150],
              ["Hotel Europe Paris", 70, 75,70,80],
              
            ]}
            options={{
              title: "Company Performance",
              hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
              vAxis: { minValue: 0 },
              // For the legend to fit, we make the chart area smaller
              chartArea: { width: "50%", height: "70%" },
              // lineWidth: 25
            }}
            /> */}
        </div>
      </div>
    );
  }
}

export default Database;
