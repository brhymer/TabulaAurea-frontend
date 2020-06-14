import React, { Component } from 'react';
import GoalForm from '../forms/GoalForm';

class Goal extends Component {
    state = {
        formStyle: {display: 'none'},
        bodyStyle: {display: 'table'},
    };

    toggleBodyForm = () => {
        (this.state.formStyle.display === 'table')
        ? this.setState({ formStyle: {display: 'none'}, bodyStyle: {display: 'table'} })
        : this.setState({ formStyle: {display: 'table'}, bodyStyle: {display: 'none'} })
    };

    deleteclickedGoal = () => this.props.deleteGoal(this.props.goal);

    render() {
        // let thisDate = this.props.goal.date.slice(0,7).split('-').reverse().join('/')
        // // let phizDate = thisDate
        // console.log(thisDate)
        return (
            <li>
                <div style={this.state.bodyStyle} className={`${true ? "listy" : ""} ${this.props.index%2===0 ? "greyitem" : ""}`}>
                    <span className="goal-item">{this.props.goal.name}</span>
                    <span className="list-item">
                    {/* {new Intl.DateTimeFormat("en-GB", {
                        year: "numeric",
                        month: "long",
                        // day: "2-digit"
                    }).format(this.props.goal.date)} */}
                    {this.props.goal.date.slice(0,10).split('-').join('/')}
                    </span>
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
