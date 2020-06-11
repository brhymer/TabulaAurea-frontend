import React, { Component } from 'react';

class CreateGoalForm extends Component {
    state = {
        name: '',
        date: ''
    }

    onInputChange = (event) => {
        this.setState({
            name: event.target.value
        });
    };

    onInputChange2 = (event) => {
        this.setState({
            date: event.target.value
        });
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        let goal = this.state;
        this.props.createGoal(goal);
        this.setState({
            name: '', date: ''
        });
    };

    render() {
        return (
            <>
                <form onSubmit={this.onFormSubmit} id="goalform">
                    <input
                        onChange={this.onInputChange}
                        type="text" id="newItemDescription"
                        value={this.state.name}
                        placeholder="add new item"
                    />
                    <input
                        onChange={this.onInputChange2}
                        type="date" id="newItemDate"
                        value={this.state.date}
                    />
                    <button type="submit" id="addGoal">Save</button>
                </form>
            </>
        );
    }
}

export default CreateGoalForm;
