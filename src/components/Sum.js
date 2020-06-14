import React, { Component } from 'react';
import Chart from './Chart';

const currentUser = localStorage.getItem('userid')

class Sum extends Component {

    render(props) {
        // let amts = this.props.values.map((el) => {
        //     return el.amount;
        // });
        let amts = this.props.values.filter((val) => {
            return val.userId === currentUser 
            }).map((el) => el.amount)
        let labels = this.props.values.filter((value) => {
            return value.userId === currentUser
            }).map((el) => el.name)

        let sum = amts.reduce(function(a, b){ return a + b; }, 0)
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
