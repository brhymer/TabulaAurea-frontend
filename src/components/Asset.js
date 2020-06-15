import React, { Component } from 'react';
import AssetForm from '../forms/AssetForm';

class Asset extends Component {
    state = {
        formStyle: {display: 'none'},
        bodyStyle: {display: 'table'},
    };

    toggleBodyForm = () => {
        (this.state.formStyle.display === 'table')
        ? this.setState({ formStyle: {display: 'none'}, bodyStyle: {display: 'table'} })
        : this.setState({ formStyle: {display: 'table'}, bodyStyle: {display: 'none'} })
    };

    deleteClickedAsset = () => this.props.deleteAsset(this.props.asset);

    render() {
        return (
            <li > 
                <div style={this.state.bodyStyle} className={`${true ? "listy" : ""} ${this.props.index%2===0 ? "greyitem" : ""}`}>
                    <span className="list-item">{this.props.asset.name}</span>
                    <span className="list-item">{this.props.asset.value}</span>
                    <span className="short-item">{this.props.asset.intRate}</span>
                    <button
                    className="edit"
                    onClick={this.toggleBodyForm}>
                        Edit
                    </button>
                    <button
                    className="remove"
                    onClick={this.deleteClickedAsset}>
                        Remove
                    </button>
                </div>
                <AssetForm
                    asset={ this.props.asset }
                    style={ this.state.formStyle }
                    autoFocus={ true }
                    buttonName="Update"
                    updateAsset={this.props.updateAsset}
                    toggleBodyForm={this.toggleBodyForm}
                />
            </li>
        );
    }
}

export default Asset;
