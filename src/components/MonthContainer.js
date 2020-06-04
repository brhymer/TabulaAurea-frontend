import React, { Component } from 'react';
import Incomes from './Incomes';
import Expenses from './Expenses';

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
