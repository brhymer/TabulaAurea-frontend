import React, { Component } from 'react';

class CreateExpenseForm extends Component {
    state = {
        expense: '',
        amount: '',
    }

    onInputChange = (event) => {
        this.setState({
            expense:event.target.value
        });
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        let expense = this.state.expense;
        this.props.createExpense(expense);
        this.setState({ 
            expense: '',
        });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit} id="expform">
                    <input
                        onChange={this.onInputChange}
                        type="text" id="newItemDescription"
                        value={this.state.expense}
                    />
                    <button type="submit" id="addExpense" >Save</button>
                </form>
            </div>
        );
    }
}

export default CreateExpenseForm;
