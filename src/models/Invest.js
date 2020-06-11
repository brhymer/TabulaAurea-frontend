import axios from 'axios';
require('dotenv').config();

const key = process.env.REACT_APP_API_KEY;

const endPoint = `https://finnhub.io/api/v1/quote?symbol=`

class InvestModel {
    static quote = () => {
        let request = axios.get(`${endPoint}MSFT&token=${key}`)
        .catch((error) => {    
            if (error.response) {
            // Request made and server responded
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
          }
      
        });
        return request;
    };
}
export default InvestModel;