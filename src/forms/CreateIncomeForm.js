import React, { Component } from 'react';

class CreateIncomeForm extends Component {
    state = {
        income: '',
    };

    onInputChange = (event) => {
        this.setState({
            income: event.target.value,
        });
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        let income = this.state.income;
        this.props.createIncome(income);
        this.setState({
            income: '',
        });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit} id="incform">
                    <input
                        onChange={this.onInputChange}
                        type="text" id="newItemDescription"
                        value={this.state.income}
                    />
                    <button type="submit" id="addIncome" >Save</button>
                </form>
            </div>
        );
    }
}

export default CreateIncomeForm;
