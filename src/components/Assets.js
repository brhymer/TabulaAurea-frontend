import React, { Component } from 'react';
import Asset from './Asset';


class Assets extends Component {
    render() {
    let assetList = this.props.assets.map((asset) => {
        return (
            <Asset
                key={asset._id}
                asset={asset}
                updateAsset={this.props.updateAsset}
                deleteAsset={this.props.deleteAsset}
            />
        );
    });

    return (
        <>
            { assetList }
        </>

    );
    }
}

export default Assets;
