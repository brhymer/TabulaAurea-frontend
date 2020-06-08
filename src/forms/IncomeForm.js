import React, { Component } from 'react';

class IncomeForm extends Component {
    state = { 
        name: '',
        amount: ''
    }
    
    onChange = (event) => {
        this.setState({
            name: event.target.value,
        });
    };
    onChange2 = (event) => {
        this.setState({
            amount: event.target.value,
        });
    };

    onSubmit = (event) => {
        event.preventDefault();
        this.props.toggleBodyForm()
        const income = this.state;
        this.props.updateIncome(income, this.props.income._id);
        
    };

    componentDidMount(){
        this.setState({
            name: this.props.income.name, amount: this.props.income.amount
        }) 
    }


    render() {
        return (
            <div style={this.props.style} className="incform">
                <form onSubmit={ this.onSubmit } >
                    <input 
                        autoFocus={ this.props.autoFocus }
                        onChange={ this.onChange }
                        placeholder={ this.props.name }
                        type="text"
                        value={(this.state.name) || ''}/>
                    <input 
                        autoFocus={ this.props.autoFocus }
                        onChange={ this.onChange2 }
                        placeholder={ this.props.amount }
                        type="number"
                        value={(this.state.amount) || ''}/>
                    <button type="submit" className="btn">{this.props.buttonName}</button>
                </form>
            </div>
        );
    }
}

export default IncomeForm;
