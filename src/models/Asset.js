import axios from 'axios';


const endPoint = `http://localhost:3001/assets`

class AssetModel {
    static all = () => {
        let request = axios.get(endPoint);
        return request
    };

    static create = (asset) => {
        let request = axios.post(endPoint, asset.name, asset.value, asset.intRate)
        return request;
    };

    static delete = (asset) => {
        let request = axios.delete(`${endPoint}/${asset._id}`);
        return request;
    };

    static update = (assetId, asset) => {
        let request = axios.put(`${endPoint}/${assetId}`, asset);
        return request;
    };
};

export default AssetModel;