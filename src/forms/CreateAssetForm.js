import React, { Component } from 'react';

class CreateAssetForm extends Component {
    state = {
        name: '',
        value: '',
        intRate: ''
    }

    onInputChange = (event) => {
        this.setState({
            name: event.target.value
        });
    };

    onInputChange2 = (event) => {
        this.setState({
            value: event.target.value
        });
    };

    onInputChange3 = (event) => {
        this.setState({
            intRate: event.target.value
        });
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        let asset = this.state;
        this.props.createAsset(asset);
        this.setState({
            name: '', value: '', intRate: ''
        });
    };

    render() {
        return (
            <>
                <form onSubmit={this.onFormSubmit} id="assetform">
                    <input
                        onChange={this.onInputChange}
                        type="text" id="newItemDescription"
                        value={this.state.name}
                        placeholder="add new item"
                    />
                    <input
                        onChange={this.onInputChange2}
                        type="number" id="newItemAmount"
                        value={this.state.value}
                    />
                    <input
                        onChange={this.onInputChange3}
                        type="number" id="newItemRate"
                        value={this.state.amount}
                    />
                    <button type="submit" id="addAsset" >Save</button>
                </form>  
            </>
        );
    }
}

export default CreateAssetForm;
