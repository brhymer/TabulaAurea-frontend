import React, { Component } from 'react';

class CreateGoalForm extends Component {
    state = {
        name: '',
        reason: '',
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
                        className="long-input"
                        onChange={this.onInputChange}
                        type="text" id="newItemDescription"
                        value={this.state.name}
                        placeholder="add new item"
                    />
                    <input
                        className="long-input"
                        onChange={this.onInputChange2}
                        type="text" id="newItemReason"
                        value={this.state.reason}
                    />
                    <button type="submit" id="addWish">Save</button>
                </form>
            </>
        );
    }
}

export default CreateGoalForm;
