import React, { Component } from 'react';
import InvestModel from '../models/Invest';
import axios from 'axios';
require('dotenv').config();
const request = require('request');



const key = process.env.REACT_APP_API_KEY;

const endPoint = `https://finnhub.io/api/v1/quote?symbol=`

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
        request('https://finnhub.io/api/v1/quote?symbol=AAPL&token=brgi807rh5r8gtveqchg', { json: true }, (err, res, body) => {
            if (err) { return console.log(err); }
            console.log(body.url);
            console.log(body.explanation);
        });
    }
        // let request = axios.get(`${endPoint}MSFT&token=${key}`)
        // .catch((error) => {    
        //     if (error.response) {
        //     // Request made and server responded
        //     console.log(error.response.data);
        //     console.log(error.response.status);
        //     console.log(error.response.headers);
        //     } else if (error.request) {
        //     // The request was made but no response was received
        //     console.log(error.request);
        //     } else {
        //     // Something happened in setting up the request that triggered an Error
        //     console.log('Error', error.message);
        //     }
        
        // });
        // return request;
        
        
        
        // InvestModel.quote().then((res) => {
        //     console.log(res.data)
        //     alert(res.data)
        //     // this.setState({
        //     //     quote: res.data
        //     // })

        //     return res.data
        // });
    // }

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
                <form onSubmit={ this.fetchStock }  >
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
