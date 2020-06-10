import React, { Component } from 'react';

class ResultContainer extends Component {
    render(props) {
        let expAmts = this.props.expenses.map((el) => {
            return el.amount;
        });
        let expSum = expAmts.reduce(function(a, b){ return a + b; }, 0)
        let incAmts = this.props.incomes.map((ele) => {
            return ele.amount;
        });
        let incSum = incAmts.reduce(function(c, d){ return c + d; }, 0)

        return (
            <div>
                Your monthly balance= ${incSum - expSum}
            </div>
        );
    }
}

export default ResultContainer;
