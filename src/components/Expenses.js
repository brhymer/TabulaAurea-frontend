import React, {Component} from 'react';
import Expense from './Expense';


class Expenses extends Component {
    render(){
    let expList = this.props.expenses.map((expense, index) => {
        return (
            <Expense 
                key={index}
                index={index}
                expense={expense}
                updateExpense={this.props.updateExpense}
                deleteExpense={this.props.deleteExpense}
            />
        );
    });


    return (
        <>
            { expList }
        </>

    );
}
}

export default Expenses;
