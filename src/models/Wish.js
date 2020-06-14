import axios from 'axios';


const endPoint = (
`https://murmuring-chamber-41495.herokuapp.com/wishlist` || 
`http://localhost:3001/wishlist`)

class WishModel {
    static all = () => {
        let request = axios.get(endPoint);
        return request;
    };

    static create = (wish) => {
        let request = axios.post(endPoint, wish.name, wish.reason)
        return request;
    };

    static delete = (wish) => {
        let request = axios.delete(`${endPoint}/${wish._id}`);
        return request;
    };

    static update = (wishId, wish) => {
        let request = axios.put(`${endPoint}/${wishId}`, wish);
        return request;
    };
};

export default WishModel;