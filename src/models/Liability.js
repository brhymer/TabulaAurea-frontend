import axios from 'axios';


const endPoint = `https://murmuring-chamber-41495.herokuapp.com/liabilities` ||
`http://localhost:3001/liabilities`

class LiabilityModel {
    static all = () => {
        let request = axios.get(endPoint);
        return request;
    };

    static create = (liability) => {
        let request = axios.post(endPoint, liability.name, liability.value, liability.intRate);
        return request;
    };

    static delete = (liability) => {
        let request = axios.delete(`${endPoint}/${liability._id}`);
        return request;
    };

    static update = (liabilityId, liability) => {
        let request = axios.put(`${endPoint}/${liabilityId}`, liability);
        return request;
    };
};

export default LiabilityModel;