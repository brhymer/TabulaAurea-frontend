import React, { Component } from 'react';
import IncomeForm from '../forms/IncomeForm';

class Income extends Component {
    state = {
        formStyle: {display: 'none'},
        bodyStyle: {},
    };

    toggleBodyForm = () => {
        (this.state.formStyle.display ==='block')
        ? this.setState({ formStyle: {display: 'none'}, bodyStyle: {display: 'block'} })
        : this.setState({ formStyle: {display: 'block'}, bodyStyle: {display: 'none'} })
    };

    deleteClickedIncome = () => this.props.deleteIncome(this.props.income);

    render() {
        return (
            <li>
                <div style={this.state.bodyStyle}>
                    <span className="list-item">{this.props.income.name}</span> 
                    <span className="list-item">{this.props.income.amount} </span>
                        <button
                        className="edit"
                        onClick={this.toggleBodyForm}>
                            Edit
                        </button>
                        <button
                        className="remove"
                        onClick={this.deleteClickedIncome}>
                            Remove
                        </button>
                </div>
                    <IncomeForm
                        income= {this.props.income}
                        style={this.state.formStyle}
                        autoFocus={true}
                        buttonName="Update"
                        updateIncome={this.props.updateIncome}
                        toggleBodyForm={this.toggleBodyForm}
                        />
            </li>
        );
    }
}

export default Income;
