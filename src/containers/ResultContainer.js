import React, { Component } from 'react';

const currentUser = localStorage.getItem('userid')

class ResultContainer extends Component {
    render(props) {
        // let expAmts = this.props.expenses.map((el) => {
        //     return el.amount;
        // });
        let expAmts = this.props.expenses.filter((val) => {
            return val.userId === currentUser 
            }).map((el) => el.amount)
        let expSum = expAmts.reduce(function(a, b){ return a + b; }, 0)
        let incAmts = this.props.incomes.filter((val) => {
            return val.userId === currentUser 
            }).map((el) => el.amount)
        let incSum = incAmts.reduce(function(c, d){ return c + d; }, 0)
        let result = `${incSum - expSum}`
        let message
        if (result<0) {
            message = "You're losing money.  Cut back on non-essentials."
        } else if (result==0) {
            message = "You're breaking even."
        } else {
            message = "Looking good.  Consider putting that money to work."
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
