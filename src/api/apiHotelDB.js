import axios from "axios";

const service = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL + '/hotelData',
  withCredentials: true, 
});

function errorHandler(error) {
  if (error.response) {
    console.log(error.response.data.message);
    throw error.response.data;
  }
  throw error;
}

export default {
    service,
    getAllHotels() {
      return service.get('/');
    },
   
  };