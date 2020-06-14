import React, { Component } from 'react';

class CreateLiabilityForm extends Component {
    state = {
        name: '',
        value: '',
        intRate: '',
        userId: ''
    }

    onInputChange = (event) => {
        this.setState({
            name: event.target.value,
            userId: localStorage.getItem('userid')
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
        let liability = this.state;
        this.props.createLiability(liability);
        this.setState({
            name: '', value: '', intRate: ''
        });
    };

    render() {
        return (
            <>
                <form onSubmit={this.onFormSubmit} id="liabform">
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
                        value={this.state.intRate}
                    />
                    <button type="submit" id="addLiability">Save</button>
                </form> 
            </>
        );
    }
}

export default CreateLiabilityForm;
