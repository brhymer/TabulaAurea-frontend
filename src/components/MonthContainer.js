import React, { Component } from 'react';

class MonthContainer extends Component {
    render() {
        return (
            <div>
                <h1>Monthly Budget</h1>
                <Incomes />
                <Expenses />
            </div>
        );
    }
}

export default MonthContainer;
