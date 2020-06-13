import axios from 'axios';

const AU = 'http://localhost:3001/gold'

const AG = 'http://localhost:3001/silver'

class InvestModel {
    static gold = () => {
        let request = axios.get(`${AU}`)
        return request;
    };

    static silver = () => {
        let request = axios.get(`${AG}`)
        return request;
    };
}
export default InvestModel;