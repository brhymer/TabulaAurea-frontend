import axios from 'axios';

const endPoint = '' // to be determined

class IncomeModel {
    static all = () => {
        let request = axios.get(endPoint);
        return request;
    };

    static create = (income) => {
        let request = axios.post(endPoint, income);
        return request;
    };

    static update = (income) => {
        let request = axios.put(`${endPoint}/${income._id}`, income);
        return request;
    };

    static delete = (income) => {
        let request = axios.delete(`${endPoint}/${income._id}`);
        return request;
    };
}

export default IncomeModel;