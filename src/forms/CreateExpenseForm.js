import React, { Component } from 'react';



class CreateExpenseForm extends Component {
    state = {
        name: '',
        amount: '',
        userId: ''
    }

    onInputChange = (event) => {
        this.setState({
            name: event.target.value,
            userId: localStorage.getItem('userid')
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
                        placeholder="add new item"
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
