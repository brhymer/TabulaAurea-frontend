import React, { Component } from 'react';
import InvestModel from '../models/Invest';

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
            <>
                <h1>Investment Tracker</h1>
                <div style={{paddingLeft: 25}} >
                <h2 style={{display: "inline"}}>Press the button for the Gold spot price</h2> &nbsp;
                <button style={{display: "inline"}} onClick={this.fetchGold} className="btn gol">Quote</button>
                <h4>Gold -- { this.state.gold }</h4>
                <br/>
                <br/>
                <h2 style={{display: "inline"}}>Press the button for the Silver spot price</h2> &nbsp;
                <button style={{display: "inline"}} onClick={this.fetchSilver} className="btn sil">Quote</button>
                <h4>Silver -- { this.state.silver }</h4>

                <p>Please note, while many outspoken figures in the financial industry such as Peter Schiff and Ray Dalio recommend including a certain amount of precious metals in your portfolio as a hedge against inflation, it is an inherently high-risk, speculative investment. Buyer beware!</p>
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
                        className="btn">Quote
                    </button>
                    <h4>{ this.state.name } -- { this.state.quote }</h4>
                </form>
                <p>While generally not as speculative as gold, for instance, investing in stocks carries with it the risk of total loss. Consult with a financial professional before making any rash moves.</p>
                <br/>
                <br/>
            </div>
            </>
        );
    }
}

export default InvestContainer;
