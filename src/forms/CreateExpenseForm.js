import React, { Component } from 'react';



class CreateExpenseForm extends Component {
    state ={
        name: '',
        amount: '',
    }

    onInputChange = (event) => {
        this.setState({
            name: event.target.value

        });
    };
    onInputChange2 = (event) => {
        this.setState({
            amount: event.target.value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        let expense = this.state; 
        this.props.createExpense(expense);
        this.setState({ 
            name: '', amount: ''
        });
    };

    render() {
        return (
            <>
                <form onSubmit={this.onFormSubmit} id="expform">
                    <input
                        onChange={this.onInputChange}
                        type="text" id="newItemDescription"
                        value={this.state.name}
                    />
                    <input
                        onChange={this.onInputChange2}
                        type="number" id="newItemAmount"
                        value={this.state.amount}
                    />
                    <button type="submit" id="addExpense" >Save</button>
                </form>
            </>
        );
    }
}

export default CreateExpenseForm;
