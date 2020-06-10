import React, { Component } from 'react';
import { Doughnut, Pie } from 'react-chartjs-2';

class Chart extends Component {
    state = {
        title: this.props.title
    }

    render() {
        let cTitle = this.state.title
        let chartData = {
            labels: this.props.labels,
            datasets: [
                {
                    label:'Amount',
                    data: this.props.data,
                    backgroundColor: [
                        "black",
                        "red",
                        "green",
                        "orange",
                        "blue",
                    ],
                    
                }
            ]
        }
        return (
            <div className="chart">
                <Pie 
                    
                    data={chartData}
                    options={{
                        title: {display: true, fontSize: "20", text: `${cTitle}` },
                        legend: {position: "right"}
                    }}
                />
            </div>
        )
    }
}

export default Chart;
