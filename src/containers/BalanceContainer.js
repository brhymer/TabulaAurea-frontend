import React, { Component } from 'react';
import AssetModel from '../models/Asset';
import LiabilityModel from '../models/Liability';
import Assets from '../components/Assets';
import Liabilities from '../components/Liabilities';
import CreateAssetForm from '../forms/CreateAssetForm.js';
import CreateLiabilityForm from '../forms/CreateLiabilityForm';
import Sum from '../components/Sum2';
import ResultContainer from './ResultContainer';

class BalanceContainer extends Component {

    state = {
        assets: [],
        liabilities: []
    };

    componentDidMount() {
        this.fetchAsset();
        this.fetchLiab();
    };

    componentDidUpdate(prevProps, prevState) {
        if (this.state.assets !== prevState.assets) {
            this.fetchAsset();
        }
        if (this.state.liabilities !== prevState.liabilities) {
            this.fetchLiab();
        }
    };

    fetchAsset = () => {
        AssetModel.all().then((res) => {
            this.setState ({
                assets: res.data.assets,
            });
        });
    }

    fetchLiab = () => {
        LiabilityModel.all().then((res) => {
            this.setState ({
                liabilities: res.data.liabilities,
            });
        });
    }

    createAsset = (name, value, intRate) => {
        let newAsset = {
            name: name,
            value: value,
            intRate: intRate
        };
        AssetModel.create(newAsset).then((res) => {
            let assets = this.state.assets;
            // let newAssets = 
            assets.push(res.data);
            // this.setState({ newAssets })
        });
    }

    createLiability = (name, value, intRate) => {
        let newLiability = {
            name: name,
            value: value,
            intRate: intRate
        };
        LiabilityModel.create(newLiability).then((res) => {
            let liabilities = this.state.liabilities;
            // let newLiabilities = 
            liabilities.push(res.data);
            // this.setState({ newLiabilities })
        });
    }

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

    updateLiability = (liabObj, liabId) => {
        const isUpdatedLiability = l => {
            return l._id === liabId;
        };

        LiabilityModel.update(liabId, liabObj)
        .then((res) => {
            let liabilities = this.state.liabilities;
            liabilities.find(isUpdatedLiability).name = liabObj.name
            this.setState({ liabilities: liabilities })
        });
    };

    deleteAsset = (asset) => {
        AssetModel.delete(asset).then((res) => {
            return asset._id !== res.data._id;
        });
        this.setState({ assets: this.state.assets });
    };

    deleteLiability = (liability) => {
        LiabilityModel.delete(liability).then((res) => {
            return liability._id !== res.data._id;
        });
        this.setState({ liabilities: this.state.liabilities });
    };


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
                    <Sum 
                        values = {this.state.assets} 
                        title = "Asset breakdown" 
                    />                        
                    </section>

                    <section className="right">Liabilities
                    <p className="entry">Entry &nbsp;&nbsp;&nbsp;&nbsp;Value&nbsp;&nbsp;&nbsp;&nbsp;Interest Rate</p>
                    <Liabilities
                        liabilities={this.state.liabilities}
                        updateLiability={this.updateLiability}
                        deleteLiability={this.deleteLiability} 
                    />
                    <CreateLiabilityForm
                        createLiability={this.createLiability} />
                    <Sum 
                        values = {this.state.liabilities} 
                        title = "Liability breakdown" 
                    />    
                    </section>
                </div>
                <ResultContainer
                        assets= {this.state.assets}
                        liabilities= {this.state.liabilities} />
            </>
        );
    }
}

export default BalanceContainer;
