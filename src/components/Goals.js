import React, { Component } from 'react';
import Goal from './Goal';

const currentUser = localStorage.getItem('userid')

class Goals extends Component {
    render() {
        let goalList = this.props.goals.filter((goal, index) => {
            return goal.userId === currentUser 
          }).map((goal, index) => {
        return (
            <Goal
                key={index}
                index={index}
                goal={goal}
                updateGoal={this.props.updateGoal}
                deleteGoal={this.props.deleteGoal}
            />
        );
    });

    return (
        <>
            { goalList }
        </>
    );
    }
}

export default Goals;
