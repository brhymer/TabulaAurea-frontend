import React, { Component } from 'react';

class ResultContainer2 extends Component {
    render(props) {
        let assetAmts = this.props.assets.map((el) => {
            return el.value;
        });
        let assetSum = assetAmts.reduce(function(a, b){ return a + b; }, 0)
        let liabAmts = this.props.liabilities.map((ele) => {
            return ele.value;
        });
        let liabSum = liabAmts.reduce(function(c, d){ return c + d; }, 0)
        
        let result = `${assetSum - liabSum}`
        let message
        if (result<0) {
            message = "You need to cut back"
        } else {
            message = "Looking good"
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
