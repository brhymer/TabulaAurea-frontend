import React, { Component } from 'react';
import ExpenseForm from '../forms/ExpenseForm';

class Expense extends Component {
    state = {
        formStyle: {display: 'none'},
        bodyStyle: {},
    };

    toggleBodyForm = () => {
        (this.state.formStyle.display ==='block')
        ? this.setState({ formStyle: {display: 'none'}, bodyStyle: {display: 'block'} })
        : this.setState({ formStyle: {display: 'block'}, bodyStyle: {display: 'none'} })
    };

    deleteClickedExpense = () => this.props.deleteExpense(this.props.expense);

    render() {
        return (
            <li>
                <div style={this.state.bodyStyle}>
                    <span className="list-item">{this.props.expense.name}</span> 
                    <span className="list-item">{this.props.expense.amount} </span>
                        <button
                        className="edit"
                        onClick={this.toggleBodyForm}>
                            Edit
                        </button>
                        <button
                        className="remove"
                        onClick={this.deleteClickedExpense}>
                            Remove
                        </button>
                </div>
                <ExpenseForm
                    expense= {this.props.expense}
                    style={this.state.formStyle}
                    autoFocus={true}
                    buttonName="Update"
                    updateExpense={this.props.updateExpense}
                    toggleBodyForm={this.toggleBodyForm}
                />
            </li>
        );
    }
}

export default Expense;
