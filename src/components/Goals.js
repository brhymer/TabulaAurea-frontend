import React, { Component } from 'react';
import Goal from './Goal';

class Goals extends Component {
    render() {
        let goalList = this.props.goals.map((goal) => {
        return (
            <Goal
                key={goal._id}
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
