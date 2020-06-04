import axios from 'axios';

const endPoint = '' //UPDATE

class ExpenseModel {
    static all = () => {
        let request = axios.get(endPoint);
        return request;
    };

    static create = (expense) => {
        let request = axios.post(endPoint, expense);
        return request;
    };

    static update = (expense) => {
        let request = axios.put(`${endPoint}/${expense._id}`, expense);
        return request;

    };

    static delete = (expense) => {
        let request = axios.delete(`${endPoint}/${expense._id}`);
        return request;
    };
};

export default ExpenseModel;