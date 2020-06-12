import React, { Component } from 'react';

class CreateGoalForm extends Component {
    state = {
        name: '',
        reason: ''
    }

    onInputChange = (event) => {
        this.setState({
            name: event.target.value
        });
    };

    onInputChange2 = (event) => {
        this.setState({
            reason: event.target.value
        });
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        let wish = this.state;
        this.props.createWish(wish);
        this.setState({
            name: '', reason: ''
        });
    };

    render() {
        return (
            <>
                <form onSubmit={this.onFormSubmit} id="wishform">
                    <input
                        onChange={this.onInputChange}
                        type="text" id="newItemDescription"
                        value={this.state.name}
                        placeholder="add new item"
                    />
                    <input
                        onChange={this.onInputChange2}
                        type="reason" id="newItemReason"
                        value={this.state.reason}
                    />
                    <button type="submit" id="addWish">Save</button>
                </form>
            </>
        );
    }
}

export default CreateGoalForm;
