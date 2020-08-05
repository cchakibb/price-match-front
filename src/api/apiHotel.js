import moment from "moment";
import axios from "axios";

const getHotelInfo = (competitors) => {
  // const array = [
  //    "g187129-d615325",
  //    "g187129-d229787",
  // ];

  let hotels = [];
  let promises = [];
  for (let i = 0; i < competitors.length; i++) {
    for (let y = 0; y < 8; y++) {
      let date1 = moment().add(y, "days").format("YYYY-MM-DD");
      let date2 = moment()
        .add(y + 1, "days")
        .format("YYYY-MM-DD");
      promises.push(
        axios.get(`https://data.xotelo.com/api/rates?hotel_key=${competitors[i]}&chk_in=${date1}&chk_out=${date2}&nocache=true`).then((response) => {
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
