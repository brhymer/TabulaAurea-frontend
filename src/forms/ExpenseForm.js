import React, { Component } from 'react';

class ExpenseForm extends Component {
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
        const expense = this.state;
        this.props.updateExpense(expense, this.props.expense._id);
        
    };

    componentDidMount(){
        this.setState({
            name: this.props.expense.name, amount: this.props.expense.amount
        }) // errors here?
    }


    render() {
        return (
            <div style={this.props.style} className="expform">
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

export default ExpenseForm;
