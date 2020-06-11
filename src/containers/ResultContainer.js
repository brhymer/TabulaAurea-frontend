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
        let result = `${incSum - expSum}`
        let message
        if (result<0) {
            message = "You need to cut back"
        } else {
            message = "Looking good"
        }

        return (
            <div className="result">
                Your monthly balance= ${result}
                <p className={result<0 ? "neg" : "pos" }>{ message }</p>
            </div>
        );
    }
}

export default ResultContainer;
