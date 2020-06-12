import React, { Component } from 'react';
import Chart from './Chart';

class Sum extends Component {

    render(props) {
        let amts = this.props.values.map((el) => {
            return el.amount;
        });
        let labels = this.props.values.map((el) => {
            return el.name;
        });

        let sum = amts.reduce(function(a, b){ return a + b; }, 0)
        console.log("hey look at this right here")
        return (
            <div className="sum">
                Total: ${ sum }
                {this.props.values ? <Chart 
                    title={this.props.title}
                    data={amts}
                    labels={labels}
                />
                : "Loading..."
                }

            </div>
        );
    }
}

export default Sum;
