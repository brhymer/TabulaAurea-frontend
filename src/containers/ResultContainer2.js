import React, { Component } from 'react';

const currentUser = localStorage.getItem('userid')

class ResultContainer2 extends Component {
    render(props) {
        // let assetAmts = this.props.assets.map((el) => {
        //     return el.value;
        // });
        let assetAmts = this.props.assets.filter((val) => {
            return val.userId === currentUser 
            }).map((el) => el.value)
        let assetSum = assetAmts.reduce(function(a, b){ return a + b; }, 0)
        let liabAmts = this.props.liabilities.filter((val) => {
            return val.userId === currentUser 
            }).map((el) => el.value)
        let liabSum = liabAmts.reduce(function(c, d){ return c + d; }, 0)
        
        let result = `${assetSum - liabSum}`
        let message
        if (result<0) {
            message = "You're in debt. Consult a financial professional for help."
        } else if (result==0) {
            message = "You're breaking even."
        } else {
            message = "Looking good. Consider investing to increase your net worth."
        }
        return (
            <div className="result">
                Your net worth= ${result}
                <p className={result<0 ? "neg" : "pos" }>{ message }</p>
            </div>
        );
    }
}

export default ResultContainer2;
