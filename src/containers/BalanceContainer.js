import React, { Component } from 'react';
import AssetModel from '../models/Asset';
// import LiabilityModel from '../models/Liability';
import Assets from '../components/Assets';
// import Liabilities from '../components/Liabilities';
import CreateAssetForm from '../forms/CreateAssetForm.js';
// import CreateLiabilityForm from '../forms/CreateLiabilityForm';

class BalanceContainer extends Component {

    state = {
        assets: [],
        liabilities: []
    };

    componentDidMount() {
        this.fetchData();
    };

    // componentDidUpdate(prevProps, prevState) {

    // };

    fetchData = () => {
        AssetModel.all().then((res) => {
            this.setState ({
                assets: res.data.assets,
            });
        });
        // LiabilityModel.all()
    }

    createAsset = (name, value, intRate) => {
        let newAsset = {
            name: name,
            value: value,
            intRate: intRate
        };
        AssetModel.create(newAsset).then((res) => {
            let assets = this.state.assets;
            let newAssets = assets.push(res.date);
            this.setState({ newAssets })
        });
    }

    // createLiability = ()

    updateAsset = (assetObj, assetId) => {
        const isUpdatedAsset = a => {
            return a._id === assetId;
        };

        AssetModel.update(assetId, assetObj)
        .then((res) => {
            let assets = this.state.assets;
            assets.find(isUpdatedAsset).name = assetObj.name
            this.setState({ assets: assets })
        });
    };

    // updateLiability = ()

    deleteAsset = (asset) => {
        AssetModel.delete(asset).then((res) => {
            return asset._id !== res.data._id;
        });
        this.setState({ assets: this.state.assets });
    };

    // deleteLiability = ()


    render() {
        return (
            <>
                <h1>Assets & Liabilities Balance Sheet</h1>
                <div className="lr">
                    <section className="left">Assets
                    <p className="entry">Entry &nbsp;&nbsp;&nbsp;&nbsp;Value&nbsp;&nbsp;&nbsp;&nbsp;Interest Rate</p>
                    <Assets 
                        assets={this.state.assets}
                        updateAsset={this.updateAsset}
                        deleteAsset={this.deleteAsset}
                    />
                    <CreateAssetForm
                        createAsset={this.createAsset}/>
                    </section>

                    <section className="right">Liabilities
                    <p className="entry">Entry &nbsp;&nbsp;&nbsp;&nbsp;Value&nbsp;&nbsp;&nbsp;&nbsp;Interest Rate</p>
                    {/* <Liabilities /> */}
                    {/* <CreateLiabilityForm /> */}
                    </section>
                </div>
            </>
        );
    }
}

export default BalanceContainer;
