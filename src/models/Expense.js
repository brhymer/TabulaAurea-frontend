import axios from 'axios';


const endPoint = `http://localhost:3001/expenses` //UPDATE

class ExpenseModel {
    static all = () => {
        let request = axios.get(`${endPoint}`);
        return request;
    };

    static create = (expense) => {
        let request = axios.post(`${endPoint}`,  expense.name, expense.amount);
        return request;
    };

    static delete = (expense) => {
        let request = axios.delete(`${endPoint}/${expense._id}`);
        return request;
    };

    static update = (expenseId, expense) => {
        let request = axios.put(`${endPoint}/${expenseId}`, expense);
        return request;
    };
};

export default ExpenseModel;