import axios from 'axios';

const endPoint = 'http://localhost:3001/incomes' // to be determined

class IncomeModel {
    static all = () => {
        let request = axios.get(endPoint);
        return request;
    };

    static create = (income) => {
        let request = axios.post(endPoint, income.name, income.amount);
        return request;
    };

    static delete = (income) => {
        let request = axios.delete(`${endPoint}/${income._id}`);
        return request;
    };

    static update = (incomeId, income) => {
        let request = axios.put(`${endPoint}/${incomeId}`, income);
        return request;
    };
}

export default IncomeModel;