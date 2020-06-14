import axios from 'axios';

const AU = 'https://murmuring-chamber-41495.herokuapp.com/gold' || 'http://localhost:3001/gold'

const AG = 'https://murmuring-chamber-41495.herokuapp.com/silver' || 'http://localhost:3001/silver'

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