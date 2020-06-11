import React, { Component } from 'react';



class CreateIncomeForm extends Component {
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
        let income = this.state; 
        this.props.createIncome(income);
        this.setState({ 
            name: '', amount: ''
        });
    };

    render() {
        return (
            <>
                <form onSubmit={this.onFormSubmit} id="incform">
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
                    <button type="submit" id="addIncome" >Save</button>
                </form>
            </>
        );
    }
}

export default CreateIncomeForm;
