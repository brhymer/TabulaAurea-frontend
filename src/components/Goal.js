import React, { Component } from 'react';
import GoalForm from '../forms/GoalForm';

class Goal extends Component {
    state = {
        formStyle: {display: 'none'},
        bodyStyle: {},
    };

    toggleBodyForm = () => {
        (this.state.formStyle.display === 'block')
        ? this.setState({ formStyle: {display: 'none'}, bodyStyle: {display: 'block'} })
        : this.setState({ formStyle: {display: 'block'}, bodyStyle: {display: 'none'} })
    };

    deleteclickedGoal = () => this.props.deleteGoal(this.props.goal);

    render() {
        return (
            <li>
                <div style={this.state.bodyStyle}>
                    <span className="list-item">{this.props.goal.name}</span>
                    <span className="list-item">{this.props.goal.date}</span>
                    <button
                    className="edit"
                    onClick={this.toggleBodyForm}>
                        Edit
                    </button>
                    <button
                    className="remove"
                    onClick={this.deleteclickedGoal}>
                        Remove
                    </button>
                </div>
                <GoalForm
                    goal={ this.props.goal }
                    style={ this.state.formStyle }
                    autoFocus= { true }
                    buttonName="Update"
                    updateGoal={this.props.updateGoal}
                    toggleBodyForm={this.toggleBodyForm}
                />
            </li>
        );
    }
}

export default Goal;
