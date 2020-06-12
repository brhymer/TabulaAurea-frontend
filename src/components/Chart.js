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
                        "#70C4A0", //teal
                        "#96C684", //light green
                        "#46697A", //slate
                        "#7A3427", //red-brown
                        "#427A2D", //green
                        "#7A1A49", //magenta
                        "##7A6026", //brownish
                        "#14367A", // dark blue
                        "#637A2D", // olive
                        "gold"
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
