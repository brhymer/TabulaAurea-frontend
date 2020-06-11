import React, { Component } from 'react';
import InvestModel from '../models/Invest';

class InvestContainer extends Component {
    state= {
        quote: ''
    }

    fetchGold = () => {
        // InvestModel.quote(code).then((res) => {
        //         // this.setState ({
        //         //     gold: res.data,
        //         return res.data
        //     // });
        // });
    }

    fetchSilver = () => {
        // InvestModel.quote(code).then((res) => {
        //     // this.setState ({
        //         // silver: res.data,
        //     // });
        //     return res.data
        // });
    }

    fetchStock = () => {
        InvestModel.quote().then((res) => {
            console.log(res.data)
            alert(res.data)
            // this.setState({
            //     quote: res.data
            // })

            return res.data
        });
    }

    render() {
        return (
            <div>
                <h1>Investment Tracker</h1>

                <h2 style={{display: "inline"}}>Gold spot price</h2> &nbsp;
                <button style={{display: "inline"}} onClick={this.fetchGold} className="btn">Quote</button>
                <br/>
                <br/>
                <br/>
                <h2 style={{display: "inline"}}>Silver spot price</h2> &nbsp;
                <button style={{display: "inline"}} onClick={this.fetchSilver} className="btn">Quote</button>
                <br/>
                <br/>
                <h2>Enter a stock code to see an up-to-the-minute quote</h2>
                <form onSubmit={ this.fetchStock } >
                    <input className="long-input"
                        placeholder="Enter a stock code here (ex. AAPL for Apple)"
                        type="text"
                        id = "code"
                        // value={ code }
                    />
                    <button type="submit" className="btn">Quote</button>
                    <h5>{ this.state.quote }</h5>
                    <br/>
                    <br/>
                </form>

            </div>
        );
    }
}

export default InvestContainer;
