import moment from "moment";
import axios from "axios";

const getHotelInfo = () => {
  /* axios
        .get(
          `https://data.xotelo.com/api/rates?hotel_key=${"g297930-d305178"}&chk_in=${"2020-10-02"}&chk_out=${"2020-10-04"}&nocache=true`
        )
        .then((response) => {
          console.log("Response from API is: ", response);
          const hotelDetail = response.data[0];
          console.log("a single hotel details: ", hotelDetail);
        })
        .catch((err) => console.log(err));
    }; */
  // var date  = new Date().toISOString().slice(0, 10);
  // let date2 = new Date(date)
  // let date3 = date2.setDate(date2.getDate() + 1)
  // console.log(date3)
  // let dateFormat= '"'+date+'"'
  // console.log(dateFormat)





  const array = [
    "g187147-d506900",
    "g187147-d197528",
    "g805488-d3345088",
    // "g187147-d2041918",
    // "g187147-d497267",
    // "g187147-d1959562",
    // "g187147-d7156343",
    // "g187147-d250928",
    // "g187147-d617625",
    // "g187147-d9452312",
  ];

  let hotels = [];
  let promises = [];
  for (let i = 0; i < array.length; i++) {

    for (let y = 0; y < 8; y++){
      let date1 = moment().add(y, "days").format("YYYY-MM-DD");
      let date2 = moment().add(y+1, "days").format("YYYY-MM-DD");
      promises.push(
        axios
          .get(
            `https://data.xotelo.com/api/rates?hotel_key=${array[i]}&chk_in=${date1}&chk_out=${date2}&nocache=true`
          )
          .then((response) => {
            // do something with response
            hotels.push(response.data.result);
          
          })
      );

    }
      
    
  }

  return Promise.all(promises).then(() => hotels);
};

export default {
  getHotelInfo,
};
