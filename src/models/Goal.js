import axios from 'axios';


const endPoint = (
// https://murmuring-chamber-41495.herokuapp.com/ || 
`http://localhost:3001/goals`)

class GoalModel {
    static all = () => {
        let request = axios.get(endPoint);
        return request;
    };

    static create = (goal) => {
        let request = axios.post(endPoint, goal.name, goal.date)
        return request;
    };

    static delete = (goal) => {
        let request = axios.delete(`${endPoint}/${goal._id}`);
        return request;
    };

    static update = (goalId, goal) => {
        let request = axios.put(`${endPoint}/${goalId}`, goal);
        return request;
    };
};

export default GoalModel;