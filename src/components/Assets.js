import React, { Component } from 'react';
import Asset from './Asset';

const currentUser = localStorage.getItem('userid')

class Assets extends Component {
    render() {
        let assetList = this.props.assets.filter((asset, index) => {
            return asset.userId === currentUser 
          }).map((asset, index) => {
        return (
            <Asset
                key={index}
                index={index}
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
