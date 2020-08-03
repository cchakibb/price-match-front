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

    // getAllNames() {

    //     const filter = {
    //         'chk_in': '2020-08-03'
    //       };
          
    //       service.connect(
    //         'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false',
    //         { useNewUrlParser: true, useUnifiedTopology: true },
    //         function(connectErr, client) {
    //           assert.equal(null, connectErr);
    //           const coll = client.db('pricematch').collection('hotels');
    //           coll.find(filter, (cmdErr, result) => {
    //             assert.equal(null, cmdErr);
    //           });
    //           client.close();
    //         });


    // }
   
  };