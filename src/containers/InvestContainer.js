import React, { Component } from 'react';
import InvestModel from '../models/Invest';
import axios from 'axios';
require('dotenv').config();
const request = require('request');

const key = process.env.REACT_APP_API_KEY2;

const endPoint = `https://finnhub.io/api/v1/quote?symbol=`
const endPoint2 = `https://finnhub.io/api/v1/stock/profile2?symbol=`

class InvestContainer extends Component {
    state= {
        quote: '',
        name: '',
        code: '',
        gold: '',
        silver: ''
    }

    onInputChange = (event) => {
        event.preventDefault()
        this.setState({
            code: event.target.value,
        });
    };


    fetchGold = () => {
        InvestModel.gold().then((res) => {
            this.setState ({

                gold: res.data.gold,
            });
        });
    }


    fetchSilver = () => {
        InvestModel.silver().then((res) => {
            this.setState ({
                silver: res.data.silver,
            });
        });
    }

    fetchStock = (code, event) => {
        event.preventDefault()
        request(`${endPoint}${code}&token=${key}`, { json: true }, (err, res, body) => {
            this.setState({
                quote: res.body.c
            })
        })
        request(`${endPoint2}${code}&token=${key}`, { json: true }, (err, res, body) => {
            this.setState({
                name: res.body.name
                })
            });
        }
    
        
        
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
                <h5>Gold -- { this.state.gold }</h5>
                <br/>
                <br/>
                <h2 style={{display: "inline"}}>Silver spot price</h2> &nbsp;
                <button style={{display: "inline"}} onClick={this.fetchSilver} className="btn">Quote</button>
                <h5>Silver -- { this.state.silver }</h5>
                <br/>
                <h2>Enter a stock code to see an up-to-the-minute quote</h2>
                <form 
                    onSubmit={(e) => this.fetchStock(this.state.code, e)}
                >
                    <input className="long-input"
                        placeholder="Enter a stock code here (ex. AAPL for Apple)"
                        type="text"
                        id = "code"
                        onChange= { this.onInputChange }
                        value={ this.state.code }
                    />
                    <button 
                        type="submit" 
                        // onClick = { this.fetchStock }
                        className="btn">Quote
                    </button>
                    <h5>{ this.state.name } -- { this.state.quote }</h5>
                    <br/>
                    <br/>
                </form>

            </div>
        );
    }
}

export default InvestContainer;
